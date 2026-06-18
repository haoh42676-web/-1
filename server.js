const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

loadDotEnv(path.join(__dirname, ".env.local"));

const PORT = Number(process.env.PORT || 3000);
const IMAGE_CONFIG = {
  provider: process.env.IMAGE_PROVIDER || "openai-compatible-relay",
  apiKey: process.env.IMAGE_API_KEY || process.env.OPENAI_API_KEY || "",
  baseUrl: process.env.IMAGE_BASE_URL || "https://gpt.fengxiaole.top/v1",
  apiMode: process.env.IMAGE_API_MODE || "responses",
  responsePath: process.env.IMAGE_RESPONSE_PATH || "/responses",
  imagePath: process.env.IMAGE_PATH || "/images/edits",
  model: process.env.IMAGE_MODEL || "gpt-5.4",
  imageEditModel: process.env.IMAGE_EDIT_MODEL || "gpt-image-1",
  outputSize: process.env.IMAGE_OUTPUT_SIZE || "1024x1536",
  outputQuality: process.env.IMAGE_OUTPUT_QUALITY || "high",
};
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
};

const STYLE_GUIDES = {
  quietLuxury: {
    label: "Quiet luxury",
    outfit: "tailored trousers, refined low-profile shoes, subtle metal jewelry, and a clean understated head accessory or no hat",
    mood: "polished, premium, restrained, elegant, neutral color palette",
  },
  sweetDate: {
    label: "Sweet date",
    outfit: "soft skirt or elegant bottoms, delicate feminine shoes, light jewelry, and a soft romantic head accessory",
    mood: "gentle, photogenic, warm, charming, soft pastel accents",
  },
  streetCool: {
    label: "Street cool",
    outfit: "statement bottoms, bold sneakers or boots, edgy accessories, and a strong cap or hat",
    mood: "young, energetic, confident, urban, layered streetwear styling",
  },
  cleanMinimal: {
    label: "Clean minimal",
    outfit: "minimal bottoms, clean shoes, restrained accessories, and a simple geometric hat or headwear option",
    mood: "cool, sleek, calm, modern, clean lines and restrained palette",
  },
};

const OCCASION_GUIDES = {
  commute: "suitable for a city workday commute",
  casual: "suitable for relaxed daily wear",
  date: "suitable for a stylish date outfit",
  street: "suitable for fashion-forward street styling",
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "POST" && url.pathname === "/api/generate-look") {
    await handleGenerateLook(req, res);
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/health") {
    sendJson(res, 200, {
      ok: true,
      provider: IMAGE_CONFIG.provider,
      model: IMAGE_CONFIG.model,
      configured: Boolean(IMAGE_CONFIG.apiKey),
      baseUrl: IMAGE_CONFIG.baseUrl,
      apiMode: IMAGE_CONFIG.apiMode,
      responsePath: IMAGE_CONFIG.responsePath,
      imagePath: IMAGE_CONFIG.imagePath,
    });
    return;
  }

  serveStatic(url.pathname, res);
});

server.listen(PORT, () => {
  console.log(`Mirror Muse server running at http://localhost:${PORT}`);
  if (!IMAGE_CONFIG.apiKey) {
    console.log("IMAGE_API_KEY is not set. Image generation requests will fail until it is configured.");
  }
});

async function handleGenerateLook(req, res) {
  try {
    if (!IMAGE_CONFIG.apiKey) {
      sendJson(res, 500, {
        error: "Server is missing IMAGE_API_KEY. Please configure it before generating images.",
      });
      return;
    }

    const body = await readJsonBody(req);
    const garmentDataUrl = body?.garmentDataUrl || "";
    const style = body?.style || "quietLuxury";
    const occasion = body?.occasion || "commute";
    const mimeType = getMimeTypeFromDataUrl(garmentDataUrl);
    const imageBytes = dataUrlToBuffer(garmentDataUrl);

    if (!imageBytes) {
      sendJson(res, 400, {
        error: "Please upload a valid garment image before generating a full look.",
      });
      return;
    }

    const prompt = buildPrompt(style, occasion);
    const generationResult = await requestImageGeneration({
      prompt,
      imageBytes,
      mimeType: mimeType || "image/png",
      garmentDataUrl,
    });

    if (!generationResult.ok) {
      sendJson(res, generationResult.status || 502, {
        error: generationResult.error || "Image generation failed.",
        details: generationResult.details,
      });
      return;
    }

    const firstImage = generationResult.payload?.data?.[0];

    if (firstImage?.b64_json) {
      sendJson(res, 200, {
        imageDataUrl: `data:image/png;base64,${firstImage.b64_json}`,
        revisedPrompt: firstImage.revised_prompt || null,
        apiMode: generationResult.mode,
      });
      return;
    }

    if (firstImage?.url) {
      sendJson(res, 200, {
        imageUrl: firstImage.url,
        revisedPrompt: firstImage.revised_prompt || null,
        apiMode: generationResult.mode,
      });
      return;
    }

    sendJson(res, 502, {
      error: "The model returned a response, but no image payload was found.",
      details: generationResult.payload,
    });
  } catch (error) {
    sendJson(res, 500, {
      error: error instanceof Error ? error.message : "Unexpected server error.",
    });
  }
}

function buildPrompt(styleKey, occasionKey) {
  const style = STYLE_GUIDES[styleKey] || STYLE_GUIDES.quietLuxury;
  const occasion = OCCASION_GUIDES[occasionKey] || OCCASION_GUIDES.commute;

  return [
    "Create a premium fashion lookbook image centered on the uploaded top garment.",
    "Preserve the uploaded top's color, print, texture, and silhouette as faithfully as possible.",
    "Generate a complete coordinated outfit image that includes the top, matching bottoms, shoes, accessories, and hat/headwear.",
    `Style direction: ${style.label}. Mood: ${style.mood}.`,
    `Outfit guidance: ${style.outfit}. Occasion: ${occasion}.`,
    "Show the full outfit as a clean studio fashion composition on an invisible mannequin or editorial outfit board.",
    "Do not place the outfit on a real person. Do not crop out any key items.",
    "Make the result feel like a polished e-commerce editorial or stylist moodboard, cohesive and realistic.",
    "Avoid text, watermarks, duplicate items, extra limbs, or chaotic background elements.",
  ].join(" ");
}

async function requestImageGeneration({ prompt, imageBytes, mimeType, garmentDataUrl }) {
  if (IMAGE_CONFIG.apiMode === "responses") {
    return callResponsesImageGeneration({
      prompt,
      garmentDataUrl,
    });
  }

  const attempts = [
    { mode: "edit", path: IMAGE_CONFIG.imagePath || "/images/edits" },
    { mode: "generate", path: "/images/generations" },
  ];

  let lastFailure = null;

  for (const attempt of attempts) {
    try {
      const result = attempt.mode === "edit"
        ? await callImageEditEndpoint({ prompt, imageBytes, mimeType, pathOverride: attempt.path })
        : await callImageGenerationEndpoint({ prompt, pathOverride: attempt.path });

      if (result.ok) {
        return { ...result, mode: attempt.mode };
      }

      lastFailure = { ...result, mode: attempt.mode };

      if (!shouldFallbackToGeneration(result)) {
        return { ...result, mode: attempt.mode };
      }
    } catch (error) {
      lastFailure = {
        ok: false,
        status: 500,
        error: error instanceof Error ? error.message : "Unknown request error.",
        details: { mode: attempt.mode },
        mode: attempt.mode,
      };
    }
  }

  return lastFailure || {
    ok: false,
    status: 502,
    error: "All image generation attempts failed.",
  };
}

async function callImageEditEndpoint({ prompt, imageBytes, mimeType, pathOverride }) {
  const imageBlob = new Blob([imageBytes], { type: mimeType });
  const form = new FormData();

  form.append("model", IMAGE_CONFIG.imageEditModel);
  form.append("prompt", prompt);
  form.append("size", IMAGE_CONFIG.outputSize);
  form.append("quality", IMAGE_CONFIG.outputQuality);
  form.append("response_format", "b64_json");
  form.append("image", imageBlob, `garment${extensionFromMimeType(mimeType)}`);

  return callRelayEndpoint({
    path: pathOverride,
    headers: {
      Authorization: `Bearer ${IMAGE_CONFIG.apiKey}`,
    },
    body: form,
  });
}

async function callImageGenerationEndpoint({ prompt, pathOverride }) {
  return callRelayEndpoint({
    path: pathOverride,
    headers: {
      Authorization: `Bearer ${IMAGE_CONFIG.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: IMAGE_CONFIG.imageEditModel,
      prompt,
      size: IMAGE_CONFIG.outputSize,
      quality: IMAGE_CONFIG.outputQuality,
      response_format: "b64_json",
    }),
  });
}

async function callResponsesImageGeneration({ prompt, garmentDataUrl }) {
  const targetPath = IMAGE_CONFIG.responsePath || "/responses";
  const attempts = [
    {
      mode: "responses-tool-configured",
      body: {
        model: IMAGE_CONFIG.model,
        input: [
          {
            role: "user",
            content: [
              { type: "input_text", text: prompt },
              { type: "input_image", image_url: garmentDataUrl },
            ],
          },
        ],
        tools: [
          {
            type: "image_generation",
            size: IMAGE_CONFIG.outputSize,
            quality: IMAGE_CONFIG.outputQuality,
          },
        ],
      },
    },
    {
      mode: "responses-tool-minimal",
      body: {
        model: IMAGE_CONFIG.model,
        input: [
          {
            role: "user",
            content: [
              { type: "input_text", text: prompt },
              { type: "input_image", image_url: garmentDataUrl },
            ],
          },
        ],
        tools: [{ type: "image_generation" }],
      },
    },
  ];

  let lastFailure = null;

  for (const attempt of attempts) {
    const result = await callRelayEndpoint({
      path: targetPath,
      headers: {
        Authorization: `Bearer ${IMAGE_CONFIG.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attempt.body),
    });

    if (!result.ok) {
      lastFailure = {
        ...result,
        mode: attempt.mode,
      };
      continue;
    }

    const imageCall = findResponsesImageCall(result.payload);
    if (imageCall?.imageBase64) {
      return {
        ok: true,
        status: result.status,
        mode: attempt.mode,
        payload: {
          data: [
            {
              b64_json: imageCall.imageBase64,
              revised_prompt: imageCall.revisedPrompt || null,
            },
          ],
          raw: result.payload,
        },
      };
    }

    lastFailure = {
      ok: false,
      status: 502,
      error: "Responses endpoint returned successfully, but no generated image was found.",
      details: {
        mode: attempt.mode,
        payload: result.payload,
      },
    };
  }

  return lastFailure || {
    ok: false,
    status: 502,
    error: "Responses image generation failed.",
  };
}

async function callRelayEndpoint({ path: pathOverride, headers, body }) {
  const targetUrl = `${IMAGE_CONFIG.baseUrl.replace(/\/$/, "")}${pathOverride}`;
  const response = await fetch(targetUrl, {
    method: "POST",
    headers,
    body,
  });

  const rawText = await response.text();
  const payload = tryParseJson(rawText);

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      error: payload?.error?.message || payload?.message || rawText || "Image generation failed.",
      details: {
        status: response.status,
        statusText: response.statusText,
        url: targetUrl,
        payload,
        rawText: rawText ? rawText.slice(0, 2000) : "",
      },
    };
  }

  return {
    ok: true,
    status: response.status,
    payload,
  };
}

function shouldFallbackToGeneration(result) {
  const message = `${result?.error || ""} ${JSON.stringify(result?.details || {})}`.toLowerCase();
  return (
    result?.status === 404 ||
    result?.status === 405 ||
    message.includes("edits") ||
    message.includes("not found") ||
    message.includes("unsupported") ||
    message.includes("invalid multipart") ||
    message.includes("form data")
  );
}

function findResponsesImageCall(payload) {
  const outputItems = Array.isArray(payload?.output) ? payload.output : [];
  for (const item of outputItems) {
    if (item?.type === "image_generation_call" && item?.result) {
      return {
        imageBase64: normalizeImageResult(item.result),
        revisedPrompt: item.revised_prompt || null,
      };
    }

    const contentItems = Array.isArray(item?.content) ? item.content : [];
    for (const content of contentItems) {
      if (content?.type === "output_image" && content?.image_base64) {
        return {
          imageBase64: content.image_base64,
          revisedPrompt: content.revised_prompt || null,
        };
      }
    }
  }

  return null;
}

function normalizeImageResult(result) {
  if (typeof result === "string") {
    return result;
  }

  if (Array.isArray(result)) {
    const first = result.find((item) => typeof item === "string" || item?.image_base64);
    if (typeof first === "string") {
      return first;
    }
    if (first?.image_base64) {
      return first.image_base64;
    }
  }

  if (result?.image_base64) {
    return result.image_base64;
  }

  return null;
}

function tryParseJson(text) {
  if (!text) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch (error) {
    return {
      raw: text,
    };
  }
}

function serveStatic(requestPath, res) {
  const safePath = requestPath === "/" ? "/index.html" : requestPath;
  const filePath = path.join(PUBLIC_DIR, path.normalize(safePath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    sendText(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, buffer) => {
    if (error) {
      sendText(res, 404, "Not found");
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(buffer);
  });
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";

    req.on("data", (chunk) => {
      raw += chunk;
      if (raw.length > 15 * 1024 * 1024) {
        reject(new Error("Request body is too large."));
        req.destroy();
      }
    });

    req.on("end", () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(new Error("Invalid JSON request body."));
      }
    });

    req.on("error", reject);
  });
}

function dataUrlToBuffer(dataUrl) {
  const match = /^data:([a-zA-Z0-9/+.-]+);base64,(.+)$/.exec(dataUrl || "");
  if (!match) {
    return null;
  }
  return Buffer.from(match[2], "base64");
}

function getMimeTypeFromDataUrl(dataUrl) {
  const match = /^data:([a-zA-Z0-9/+.-]+);base64,/.exec(dataUrl || "");
  return match ? match[1] : null;
}

function extensionFromMimeType(mimeType) {
  if (mimeType === "image/jpeg") {
    return ".jpg";
  }
  if (mimeType === "image/webp") {
    return ".webp";
  }
  return ".png";
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  res.end(JSON.stringify(payload));
}

function sendText(res, statusCode, text) {
  res.writeHead(statusCode, {
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end(text);
}

function loadDotEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    return;
  }

  const text = fs.readFileSync(filePath, "utf8");
  text.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    const value = rawValue.replace(/^['"]|['"]$/g, "");

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  });
}
