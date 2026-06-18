const styleProfiles = {
  quietLuxury: {
    name: "静奢通勤",
    shortText: "适合想要稳、净、有质感的日常用户。",
    narrative: "让主单品留在视觉中心，其它单品负责稳住质感和完成度。",
    palette: ["奶油白", "烟灰", "深咖"],
    paletteText: "配色的任务是把上衣托出来，不是跟它抢戏。",
    accessory: "金属耳饰",
    accessoryText: "只补最能立住气质的一笔，不要堆满。",
    hat: "无帽 / 发箍替代",
    hatText: "这套更强调头部线条干净，不一定强行加帽子。",
    pieces: {
      commute: { bottom: "高腰烟管裤", shoes: "尖头浅口鞋" },
      casual: { bottom: "直筒牛仔裤", shoes: "干净乐福鞋" },
      date: { bottom: "缎面半裙", shoes: "细带凉鞋" },
      street: { bottom: "深色直筒裤", shoes: "皮面低帮鞋" },
    },
  },
  sweetDate: {
    name: "甜感约会",
    shortText: "适合想穿得柔和一点、精致一点、上镜感更强的用户。",
    narrative: "这套要先让人觉得轻盈和温柔，再去看细节层次。",
    palette: ["珍珠白", "雾粉", "豆沙棕"],
    paletteText: "用柔和颜色把气质拉近，让主单品显得更亲和。",
    accessory: "细链项链",
    accessoryText: "配饰负责补氛围，不要把甜感做成堆砌感。",
    hat: "蝴蝶结发箍",
    hatText: "头部配件更轻，不建议做太重的帽型。",
    pieces: {
      commute: { bottom: "A 字中裙", shoes: "玛丽珍鞋" },
      casual: { bottom: "高腰短裙", shoes: "芭蕾平底鞋" },
      date: { bottom: "缎面长裙", shoes: "尖头细跟鞋" },
      street: { bottom: "低腰工装裙", shoes: "厚底短靴" },
    },
  },
  streetCool: {
    name: "街头酷感",
    shortText: "适合想要态度、量感和年轻街头感的用户。",
    narrative: "轮廓和风格记忆点比细碎精致更重要，整套要有态度。",
    palette: ["炭黑", "牛仔蓝", "冷白"],
    paletteText: "颜色要利落有对比，但主单品依然是焦点。",
    accessory: "链条包",
    accessoryText: "一件准的配饰，比堆很多元素更有效。",
    hat: "棒球帽",
    hatText: "帽子会把街头感直接拉满，是这套的重要组成。",
    pieces: {
      commute: { bottom: "廓形西裤", shoes: "厚底乐福鞋" },
      casual: { bottom: "工装直筒裤", shoes: "板鞋" },
      date: { bottom: "低腰工装裤", shoes: "厚底短靴" },
      street: { bottom: "阔腿牛仔裤", shoes: "复古跑鞋" },
    },
  },
  cleanMinimal: {
    name: "极简清冷",
    shortText: "适合喜欢清透、利落、克制气氛的用户。",
    narrative: "这套不追求热闹，而是追求干净和秩序感。",
    palette: ["冷白", "浅灰", "墨蓝"],
    paletteText: "主色尽量简洁，让线条和干净程度成为记忆点。",
    accessory: "细框眼镜",
    accessoryText: "配饰不抢视线，只强化整套清冷秩序感。",
    hat: "极简渔夫帽",
    hatText: "如果加帽子，也只做结构感补充。",
    pieces: {
      commute: { bottom: "直线感西裤", shoes: "方头低跟鞋" },
      casual: { bottom: "浅灰直筒裤", shoes: "极简穆勒鞋" },
      date: { bottom: "极简长裙", shoes: "尖头浅口鞋" },
      street: { bottom: "深灰阔腿裤", shoes: "低帮皮面鞋" },
    },
  },
};

const occasionLabels = {
  commute: "通勤",
  casual: "日常",
  date: "约会",
  street: "街头",
};

const providerProfiles = {
  relay: {
    label: "ChatGPT 中转站",
    hint: "默认使用 ChatGPT 中转站，适合你当前已有的中转配置。",
  },
  gemini: {
    label: "Gemini 官方 API",
    hint: "Gemini 走官方接口，更适合单独配置稳定的线上生图能力。",
  },
};

const state = {
  garmentFile: null,
  garmentPreviewUrl: "",
  style: "quietLuxury",
  occasion: "commute",
  provider: "relay",
  generated: false,
  lastError: "",
};

const garmentInput = document.querySelector("#garmentInput");
const garmentStatus = document.querySelector("#garmentStatus");
const occasionInput = document.querySelector("#occasionInput");
const providerInput = document.querySelector("#providerInput");
const providerHint = document.querySelector("#providerHint");
const styleGrid = document.querySelector("#styleGrid");
const generateButton = document.querySelector("#generateButton");
const resetButton = document.querySelector("#resetButton");
const lookForm = document.querySelector("#lookForm");

const selectedStyleName = document.querySelector("#selectedStyleName");
const selectedStyleText = document.querySelector("#selectedStyleText");
const previewState = document.querySelector("#previewState");
const previewHeadline = document.querySelector("#previewHeadline");
const previewCopy = document.querySelector("#previewCopy");
const resultIntro = document.querySelector("#resultIntro");
const resultVibe = document.querySelector("#resultVibe");
const resultNarrative = document.querySelector("#resultNarrative");
const resultBottom = document.querySelector("#resultBottom");
const resultBottomText = document.querySelector("#resultBottomText");
const resultShoes = document.querySelector("#resultShoes");
const resultShoesText = document.querySelector("#resultShoesText");
const resultAccessory = document.querySelector("#resultAccessory");
const resultAccessoryText = document.querySelector("#resultAccessoryText");
const resultHat = document.querySelector("#resultHat");
const resultHatText = document.querySelector("#resultHatText");
const resultPaletteText = document.querySelector("#resultPaletteText");
const paletteRow = document.querySelector("#paletteRow");
const generatedImage = document.querySelector("#generatedImage");
const previewPlaceholder = document.querySelector("#previewPlaceholder");

garmentInput.addEventListener("change", (event) => loadGarment(event.target.files?.[0]));
occasionInput.addEventListener("change", () => {
  state.occasion = occasionInput.value;
  clearGenerationState();
  syncUI();
});
providerInput.addEventListener("change", () => {
  state.provider = providerInput.value;
  clearGenerationState();
  syncUI();
});
styleGrid.addEventListener("click", onStylePick);
generateButton.addEventListener("click", generateLookImage);
resetButton.addEventListener("click", resetAll);

syncUI();

function loadGarment(file) {
  if (!file) {
    return;
  }

  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = file;
  state.garmentPreviewUrl = URL.createObjectURL(file);
  garmentStatus.textContent = file.name;
  clearGenerationState();
  resetImageStage();
  syncUI();
}

function onStylePick(event) {
  const button = event.target.closest("[data-style]");
  if (!button) {
    return;
  }

  state.style = button.dataset.style;
  clearGenerationState();
  syncStyleSelection();
  syncUI();
}

async function generateLookImage() {
  if (!state.garmentFile) {
    state.lastError = "";
    previewState.textContent = "请先上传";
    previewHeadline.textContent = "先上传上衣图片";
    previewCopy.textContent = "没有主单品，模型无法围绕它生成整套穿搭图。";
    return;
  }

  lookForm.classList.add("is-loading");
  state.lastError = "";
  previewState.textContent = "生成中";
  previewHeadline.textContent = `正在调用 ${providerProfiles[state.provider].label} 生成整套穿搭图`;
  previewCopy.textContent = "系统会把上衣图片和风格要求一起发给后端，再由后端调用对应的真实生图模型。";

  try {
    const garmentDataUrl = await readFileAsDataUrl(state.garmentFile);
    const response = await fetch("/api/generate-look", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        garmentDataUrl,
        style: state.style,
        occasion: state.occasion,
        provider: state.provider,
      }),
    });

    const payload = await response.json();
    if (!response.ok) {
      throw new Error(toUserError(payload, state.provider));
    }

    const imageSrc = payload.imageDataUrl || payload.imageUrl;
    if (!imageSrc) {
      throw new Error("模型已经返回成功，但没有拿到图片结果。请点击“重新生成整套穿搭图”再试一次。");
    }

    generatedImage.src = imageSrc;
    generatedImage.classList.remove("hidden");
    previewPlaceholder.classList.add("hidden");
    state.generated = true;
    state.lastError = "";
    previewState.textContent = "已生成";
    previewHeadline.textContent = `模型已经生成整套 look 图${payload.providerLabel ? ` - ${payload.providerLabel}` : ""}`;
    previewCopy.textContent = "当前展示的是后端返回的真实图片，不再是前端模拟图。";
    syncUI();
  } catch (error) {
    state.generated = false;
    state.lastError = error instanceof Error ? error.message : "请求失败，请稍后重试。";
    previewState.textContent = "生成失败";
    previewHeadline.textContent = "这次没有成功出图";
    previewCopy.textContent = state.lastError;
    syncUI();
  } finally {
    lookForm.classList.remove("is-loading");
  }
}

function resetAll() {
  garmentInput.value = "";
  garmentStatus.textContent = "未选择";
  occasionInput.value = "commute";
  providerInput.value = "relay";

  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = null;
  state.garmentPreviewUrl = "";
  state.style = "quietLuxury";
  state.occasion = "commute";
  state.provider = "relay";
  clearGenerationState();
  resetImageStage();

  syncStyleSelection();
  syncUI();
}

function clearGenerationState() {
  state.generated = false;
  state.lastError = "";
}

function resetImageStage() {
  generatedImage.classList.add("hidden");
  generatedImage.removeAttribute("src");
  previewPlaceholder.classList.remove("hidden");
}

function syncStyleSelection() {
  document.querySelectorAll("[data-style]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.style === state.style);
  });
}

function syncUI() {
  const look = getLook();
  const profile = styleProfiles[state.style];
  const provider = providerProfiles[state.provider];

  syncStyleSelection();

  selectedStyleName.textContent = profile.name;
  selectedStyleText.textContent = profile.shortText;
  providerHint.textContent = provider.hint;
  resultVibe.textContent = profile.name;
  resultNarrative.textContent = profile.narrative;
  resultBottom.textContent = look.bottom;
  resultBottomText.textContent = `推荐 ${look.bottom}，让整套在${occasionLabels[state.occasion]}场景里更完整。`;
  resultShoes.textContent = look.shoes;
  resultShoesText.textContent = `${look.shoes}负责把风格真正落地，看起来才像一整套。`;
  resultAccessory.textContent = profile.accessory;
  resultAccessoryText.textContent = profile.accessoryText;
  resultHat.textContent = profile.hat;
  resultHatText.textContent = profile.hatText;
  resultPaletteText.textContent = profile.paletteText;
  resultIntro.textContent = state.generated
    ? `已经根据上传的上衣、${profile.name}风格、${occasionLabels[state.occasion]}场景，并使用 ${provider.label} 生成整套建议与图片。`
    : "先有完整 look，用户才知道这件上衣最后会被搭成什么样。";

  generateButton.textContent = state.lastError ? "重新生成整套穿搭图" : "生成整套穿搭图";

  if (!state.generated) {
    if (state.lastError) {
      previewState.textContent = "生成失败";
      previewHeadline.textContent = "这次没有成功出图";
      previewCopy.textContent = state.lastError;
    } else {
      previewState.textContent = state.garmentFile ? "等待生成" : "等待上传";
      previewHeadline.textContent = state.garmentFile
        ? "先上传上衣，再生成完整 look"
        : "先上传一张上衣图片";
      previewCopy.textContent = state.garmentFile
        ? `系统会围绕上传的上衣，按风格自动补出裤子、鞋子、配饰和帽子，并使用 ${provider.label} 出图。`
        : "图片会发送到后端，再由后端调用真实图像模型。";
    }
  }

  paletteRow.innerHTML = profile.palette.map((item) => `<span>${item}</span>`).join("");
}

function getLook() {
  return styleProfiles[state.style].pieces[state.occasion];
}

function toUserError(payload, provider) {
  const message = payload?.error || "图片生成失败。";

  if (/No available compatible accounts/i.test(message)) {
    return "当前中转站没有可用图像账号，页面本身正常，但这一刻无法出图。请稍后重试，或切换到 Gemini 官方 API。";
  }

  if (/temporarily unavailable|upstream/i.test(message)) {
    return "图像服务上游暂时不可用。你可以点击“重新生成整套穿搭图”再试一次。";
  }

  if (/missing image_api_key|relay provider is not configured/i.test(message)) {
    return "服务器还没有配置 ChatGPT 中转站的图像 Key，请先在部署平台补上相关环境变量。";
  }

  if (/missing gemini_api_key|gemini provider is not configured/i.test(message)) {
    return "服务器还没有配置 Gemini 官方 API Key，请先在部署平台补上 `GEMINI_API_KEY`。";
  }

  if (/quota|rate limit|resource exhausted/i.test(message)) {
    return provider === "gemini"
      ? "Gemini 当前额度不足或触发限流，请稍后再试，或切回 ChatGPT 中转站。"
      : "当前生图通道额度不足或触发限流，请稍后再试。";
  }

  return `${message} 你可以点击“重新生成整套穿搭图”再试一次。`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("读取图片失败。"));
    reader.readAsDataURL(file);
  });
}
