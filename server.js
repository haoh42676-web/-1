const http = require("http");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

loadDotEnv(path.join(__dirname, ".env.local"));

const PORT = Number(process.env.PORT || 3000);

const RELAY_CONFIG = {
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
    outfit: "tailored trousers, refined low-profile shoes, subtle jewelry, and clean understated finishing pieces",
    mood: "polished, premium, restrained, elegant, neutral color palette",
  },
  sweetDate: {
    label: "Sweet date",
    outfit: "soft skirts or feminine bottoms, delicate shoes, light jewelry, and romantic finishing accessories",
    mood: "gentle, photogenic, charming, softly feminine",
  },
  streetCool: {
    label: "Street cool",
    outfit: "statement bottoms, bold sneakers or boots, edgy accessories, and strong streetwear styling",
    mood: "young, energetic, confident, urban",
  },
  cleanMinimal: {
    label: "Clean minimal",
    outfit: "minimal bottoms, clean shoes, restrained accessories, and sharp lines",
    mood: "cool, sleek, calm, modern",
  },
  frenchRelaxed: {
    label: "French relaxed",
    outfit: "easy trousers or skirts, soft refined shoes, understated bags, and effortless accents",
    mood: "natural, relaxed, chic, quietly refined",
  },
  urbanOutdoor: {
    label: "Urban outdoor",
    outfit: "functional bottoms, movement-friendly shoes, practical bags, and lightweight utility details",
    mood: "practical, layered, city-ready, lightweight technical",
  },
  retroAcademy: {
    label: "Retro academy",
    outfit: "pleated skirts or neat trousers, loafers or mary janes, scholarly bags, and vintage academic accents",
    mood: "bookish, classic, vintage, youthful, cultured",
  },
  resortChic: {
    label: "Resort chic",
    outfit: "lightweight bottoms, elegant sandals, woven bags, and airy vacation accessories",
    mood: "sunlit, relaxed, breezy, luxurious, travel-ready",
  },
};

const OCCASION_GUIDES = {
  commute: "suitable for office commute and city workdays",
  casual: "suitable for relaxed daily wear",
  date: "suitable for photogenic date styling",
  street: "suitable for fashion-forward street styling",
  travel: "suitable for stylish and comfortable travel wear",
  party: "suitable for social events, dinners, and night outings",
  campus: "suitable for youthful campus and student daily styling",
};

const MODE_GUIDES = {
  balanced: "Prioritize versatility and easy wearability. Make Look A safe and polished, and Look B slightly more styled.",
  camera: "Prioritize photogenic styling and stronger silhouette impact for both looks, especially Look B.",
  slimming: "Prioritize higher waistlines, cleaner vertical proportions, and flattering visual balance.",
  comfort: "Prioritize movement, softness, comfort, and easy all-day wear.",
  statement: "Prioritize stronger shape, contrast, layering, and fashion-forward styling.",
  luxury: "Prioritize premium materials, polished accessories, upscale detailing, and elegant finishing.",
  youthful: "Prioritize freshness, energy, lightness, and a younger more lively attitude.",
};

const COLOR_STRATEGY_GUIDES = {
  toneOnTone: "Use tonal color relationships and adjacent shades for a cohesive premium result.",
  lightContrast: "Use light contrast and brighter accents to make the outfit cleaner and more vivid.",
  softLuxury: "Use low-saturation elevated colors and a premium restrained palette.",
  seasonal: "Use a seasonal color story while keeping the uploaded top as the anchor piece.",
  cleanNeutrals: "Use clean neutrals and timeless understated colors for a versatile premium result.",
  accentPop: "Use mostly calm tones with one controlled accent color to create a memorable focal point.",
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
      provider: "relay",
      configured: Boolean(RELAY_CONFIG.apiKey),
      model: RELAY_CONFIG.model,
      baseUrl: RELAY_CONFIG.baseUrl,
      apiMode: RELAY_CONFIG.apiMode,
      imageEditModel: RELAY_CONFIG.imageEditModel,
    });
    return;
  }

  serveStatic(url.pathname, res);
});

server.listen(PORT, () => {
  console.log(`Mirror Muse server running at http://localhost:${PORT}`);
  if (!RELAY_CONFIG.apiKey) {
    console.log("Image relay is not configured yet. Please set IMAGE_API_KEY.");
  }
});

async function handleGenerateLook(req, res) {
  try {
    const body = await readJsonBody(req);
    const garmentDataUrl = body?.garmentDataUrl || "";
    const style = body?.style || "quietLuxury";
    const occasion = body?.occasion || "commute";
    const mode = body?.mode || "balanced";
    const colorStrategy = body?.colorStrategy || "toneOnTone";
    const mimeType = getMimeTypeFromDataUrl(garmentDataUrl);
    const imageBytes = dataUrlToBuffer(garmentDataUrl);

    if (!imageBytes) {
      sendJson(res, 400, {
        error: "Please upload a valid top image before generating outfits.",
      });
      return;
    }

    const prompt = buildPrompt(style, occasion, mode, colorStrategy);
    const generationResult = await callRelayImageGeneration({
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

    sendJson(res, 200, {
      imageDataUrl: generationResult.imageDataUrl || null,
      imageUrl: generationResult.imageUrl || null,
      revisedPrompt: generationResult.revisedPrompt || null,
      provider: "relay",
      providerLabel: "ChatGPT relay image",
      apiMode: generationResult.mode || null,
    });
  } catch (error) {
    sendJson(res, 500, {
      error: error instanceof Error ? error.message : "Unexpected server error.",
    });
  }
}

function buildPrompt(styleKey, occasionKey, modeKey, colorStrategyKey) {
  const style = STYLE_GUIDES[styleKey] || STYLE_GUIDES.quietLuxury;
  const occasion = OCCASION_GUIDES[occasionKey] || OCCASION_GUIDES.commute;
  const mode = MODE_GUIDES[modeKey] || MODE_GUIDES.balanced;
  const colorStrategy = COLOR_STRATEGY_GUIDES[colorStrategyKey] || COLOR_STRATEGY_GUIDES.toneOnTone;

  return [
    "Create one premium fashion concept board centered on the uploaded top garment.",
    "Preserve the uploaded top's color, print, texture, and silhouette as faithfully as possible.",
    "Generate one polished comparison board that clearly presents two complete outfit solutions: Look A and Look B.",
    "Both looks must use the same uploaded top as the hero item.",
    "Each look must include matching bottoms, shoes, accessories, and hat or head styling suggestions.",
    "Look A should feel practical, wearable, and easy to reference for real shopping or dressing.",
    "Look B should feel more styled, more expressive, and better suited for social sharing or photo moments.",
    `Style direction: ${style.label}. Mood: ${style.mood}.`,
    `Outfit guidance: ${style.outfit}. Occasion: ${occasion}.`,
    `Mode guidance: ${mode}.`,
    `Color strategy: ${colorStrategy}.`,
    "Show both looks fully and clearly in the same image, separated enough to compare at a glance.",
    "Do not place the outfit on a real person.",
    "Use an editorial flatlay, hanger composition, invisible mannequin, or polished fashion board presentation.",
    "Avoid text labels, watermarks, duplicate garments, chaotic backgrounds, or unrelated items.",
    "The final result should feel like a premium stylist board prepared for a consumer deciding between two complete outfit directions.",
  ].join(" ");
}

async function callRelayImageGeneration({ prompt, imageBytes, mimeType, garmentDataUrl }) {
  if (!RELAY_CONFIG.apiKey) {
    return {
      ok: false,
      status: 500,
      error: "Relay provider is not configured. Missing IMAGE_API_KEY.",
    };
  }

  if (RELAY_CONFIG.apiMode === "responses") {
    return callResponsesImageGeneration({
      prompt,
      garmentDataUrl,
    });
  }

  const attempts = [
    { mode: "edit", path: RELAY_CONFIG.imagePath || "/images/edits" },
    { mode: "generate", path: "/images/generations" },
  ];

  let lastFailure = null;

  for (const attempt of attempts) {
    try {
      const result = attempt.mode === "edit"
        ? await callImageEditEndpoint({ prompt, imageBytes, mimeType, pathOverride: attempt.path })
        : await callImageGenerationEndpoint({ prompt, pathOverride: attempt.path });

      if (result.ok) {
        return extractRelaySuccess(result, attempt.mode);
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

function extractRelaySuccess(result, mode) {
  const firstImage = result.payload?.data?.[0];

  if (firstImage?.b64_json) {
    return {
      ok: true,
      status: result.status,
      mode,
      imageDataUrl: `data:image/png;base64,${firstImage.b64_json}`,
      revisedPrompt: firstImage.revised_prompt || null,
      payload: result.payload,
    };
  }

  if (firstImage?.url) {
    return {
      ok: true,
      status: result.status,
      mode,
      imageUrl: firstImage.url,
      revisedPrompt: firstImage.revised_prompt || null,
      payload: result.payload,
    };
  }

  return {
    ok: false,
    status: 502,
    error: "The model returned a response, but no image payload was found.",
    details: result.payload,
  };
}

async function callImageEditEndpoint({ prompt, imageBytes, mimeType, pathOverride }) {
  const imageBlob = new Blob([imageBytes], { type: mimeType });
  const form = new FormData();

  form.append("model", RELAY_CONFIG.imageEditModel);
  form.append("prompt", prompt);
  form.append("size", RELAY_CONFIG.outputSize);
  form.append("quality", RELAY_CONFIG.outputQuality);
  form.append("response_format", "b64_json");
  form.append("image", imageBlob, `garment${extensionFromMimeType(mimeType)}`);

  return callRelayEndpoint({
    path: pathOverride,
    headers: {
      Authorization: `Bearer ${RELAY_CONFIG.apiKey}`,
    },
    body: form,
  });
}

async function callImageGenerationEndpoint({ prompt, pathOverride }) {
  return callRelayEndpoint({
    path: pathOverride,
    headers: {
      Authorization: `Bearer ${RELAY_CONFIG.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: RELAY_CONFIG.imageEditModel,
      prompt,
      size: RELAY_CONFIG.outputSize,
      quality: RELAY_CONFIG.outputQuality,
      response_format: "b64_json",
    }),
  });
}

async function callResponsesImageGeneration({ prompt, garmentDataUrl }) {
  const targetPath = RELAY_CONFIG.responsePath || "/responses";
  const attempts = [
    {
      mode: "responses-tool-configured",
      body: {
        model: RELAY_CONFIG.model,
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
            size: RELAY_CONFIG.outputSize,
            quality: RELAY_CONFIG.outputQuality,
          },
        ],
      },
    },
    {
      mode: "responses-tool-minimal",
      body: {
        model: RELAY_CONFIG.model,
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
        Authorization: `Bearer ${RELAY_CONFIG.apiKey}`,
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
        imageDataUrl: `data:image/png;base64,${imageCall.imageBase64}`,
        revisedPrompt: imageCall.revisedPrompt || null,
        payload: result.payload,
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
  const targetUrl = `${RELAY_CONFIG.baseUrl.replace(/\/$/, "")}${pathOverride}`;
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
