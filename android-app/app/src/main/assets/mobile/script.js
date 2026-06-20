const API_BASE_URL = window.__MM_FORCE_API_BASE__ || "";

const CATEGORY_CONFIG = [
  { key: "tops", label: "上衣" },
  { key: "bottoms", label: "裤子 / 裙子" },
  { key: "shoes", label: "鞋子" },
  { key: "hats", label: "帽子" },
  { key: "accessories", label: "配饰" },
];

const styleProfiles = {
  quietLuxury: {
    name: "静奢通勤",
    shortText: "先给你一套稳妥耐看方案，再给一套更精致、更适合出片的升级版。",
    narrative: "重点是干净、克制、显贵气，让主单品一直保持主角位置。",
    palette: ["奶油白", "烟灰", "深咖"],
    paletteText: "色彩会偏低饱和和高质感，让整体更高级、更耐看。",
  },
  sweetDate: {
    name: "甜感约会",
    shortText: "整体更柔和、更上镜，适合约会和轻社交场景。",
    narrative: "会优先强调亲和感、精致感和拍照氛围。",
    palette: ["珍珠白", "雾粉", "豆沙棕"],
    paletteText: "配色会更柔和，提升温柔感和精致度。",
  },
  streetCool: {
    name: "街头酷感",
    shortText: "一套更日常街头，一套更有轮廓、更有态度。",
    narrative: "更强调层次、廓形和街头感，Look B 会更抓眼。",
    palette: ["炭黑", "牛仔蓝", "冷白"],
    paletteText: "会用适度对比强化记忆点和态度感。",
  },
  cleanMinimal: {
    name: "极简清冷",
    shortText: "一套克制干净，一套更有秩序感和高级感。",
    narrative: "重点会落在线条、比例和清爽的整体气质上。",
    palette: ["冷白", "浅灰", "墨蓝"],
    paletteText: "偏中性低调，让线条和材质自己说话。",
  },
  frenchRelaxed: {
    name: "法式松弛",
    shortText: "更自然、更轻松，但仍然保留完成度。",
    narrative: "会把松弛感和质感同时保住。",
    palette: ["燕麦白", "焦糖棕", "海盐蓝"],
    paletteText: "配色自然耐看，强调不费力的精致感。",
  },
  urbanOutdoor: {
    name: "城市机能",
    shortText: "更偏功能感、舒适度和实穿层次。",
    narrative: "适合通勤移动、城市出行和轻户外感场景。",
    palette: ["岩灰", "草木绿", "曜黑"],
    paletteText: "颜色更理性、耐脏，也更像功能化穿搭。",
  },
  retroAcademy: {
    name: "复古学院",
    shortText: "更有书卷感、少年感和复古气质。",
    narrative: "会加入学院风比例和更文气的搭配元素。",
    palette: ["奶油白", "巧克力棕", "酒红"],
    paletteText: "配色偏复古书卷气，整体更温和有文化感。",
  },
  resortChic: {
    name: "度假轻奢",
    shortText: "更轻盈、更适合夏日和旅行出片。",
    narrative: "重点会放在度假氛围、轻盈感和高级的松弛感。",
    palette: ["沙白", "日晒金", "海岛蓝"],
    paletteText: "会更有空气感、度假感和轻奢氛围。",
  },
};

const occasionLabels = {
  commute: "通勤上班",
  casual: "日常出门",
  date: "约会出片",
  street: "街头造型",
  travel: "旅行轻便",
  party: "聚会晚间",
  campus: "校园休闲",
};

const modeProfiles = {
  balanced: { name: "稳妥不出错", text: "Look A 更日常耐穿，Look B 在同方向上更完整一点。" },
  camera: { name: "更上镜出片", text: "更考虑镜头效果、比例和视觉冲击力。" },
  slimming: { name: "更显高显瘦", text: "更优先考虑比例、腰线和纵向延伸感。" },
  comfort: { name: "更轻松好穿", text: "舒适度更高，更适合长时间穿着。" },
  statement: { name: "更有造型感", text: "Look B 会明显强化层次、廓形和个性表达。" },
  luxury: { name: "更精致贵气", text: "更偏高质感材质、精致配饰和整体完成度。" },
  youthful: { name: "更年轻有活力", text: "整体会更轻快、更有元气和青春感。" },
};

const colorProfiles = {
  toneOnTone: { name: "顺色延伸", text: "整体更统一，更容易显高级。" },
  lightContrast: { name: "轻对比提亮", text: "通过轻对比提亮画面，但不会显乱。" },
  softLuxury: { name: "低饱和高级感", text: "更克制，也更容易显贵。" },
  seasonal: { name: "季节氛围配色", text: "配色会更贴近当前季节印象。" },
  cleanNeutrals: { name: "干净中性色", text: "更耐看、好穿，适合长期参考。" },
  accentPop: { name: "一点亮色点题", text: "会用一个受控亮点让 Look B 更有记忆点。" },
};

const FALLBACK_ITEMS = {
  quietLuxury: {
    bottoms: ["高腰烟管裤", "垂感直筒裤"],
    shoes: ["尖头浅口鞋", "皮面乐福鞋"],
    accessories: ["金属耳饰", "结构感托特包"],
    hats: ["无帽 / 发夹替代", "小檐礼帽"],
  },
  sweetDate: {
    bottoms: ["轻盈半裙", "高腰A字裙"],
    shoes: ["细带玛丽珍", "低跟单鞋"],
    accessories: ["珍珠耳饰", "小号链条包"],
    hats: ["蝴蝶结发饰", "草编小帽"],
  },
  streetCool: {
    bottoms: ["工装阔腿裤", "水洗牛仔裤"],
    shoes: ["厚底球鞋", "短靴"],
    accessories: ["银色项链", "斜挎机能包"],
    hats: ["棒球帽", "针织冷帽"],
  },
  cleanMinimal: {
    bottoms: ["极简直筒裤", "高腰长裙"],
    shoes: ["干净乐福鞋", "极简穆勒鞋"],
    accessories: ["细线条耳饰", "硬挺手提包"],
    hats: ["无帽 / 利落发型", "极简鸭舌帽"],
  },
  frenchRelaxed: {
    bottoms: ["浅色直筒牛仔裤", "松弛感半裙"],
    shoes: ["软皮芭蕾鞋", "低跟穆勒鞋"],
    accessories: ["编织包", "金色小耳环"],
    hats: ["丝巾绑发", "贝雷帽"],
  },
  urbanOutdoor: {
    bottoms: ["机能束脚裤", "轻量工装裙"],
    shoes: ["户外运动鞋", "轻机能短靴"],
    accessories: ["尼龙斜挎包", "运动感墨镜"],
    hats: ["棒球帽", "渔夫帽"],
  },
  retroAcademy: {
    bottoms: ["百褶短裙", "复古直筒裤"],
    shoes: ["乐福鞋", "玛丽珍鞋"],
    accessories: ["书卷感单肩包", "复古金属胸针"],
    hats: ["贝雷帽", "发箍"],
  },
  resortChic: {
    bottoms: ["飘逸长裙", "轻薄阔腿裤"],
    shoes: ["细带凉鞋", "草编平底鞋"],
    accessories: ["藤编包", "度假耳环"],
    hats: ["宽檐草帽", "丝巾绑发"],
  },
};

const state = {
  garmentFile: null,
  garmentPreviewUrl: "",
  style: "quietLuxury",
  occasion: "commute",
  mode: "balanced",
  colorStrategy: "toneOnTone",
  generated: false,
  lastError: "",
  userChecked: false,
  isLoggedIn: false,
  username: "",
  wardrobeOnly: false,
  submitting: false,
  wardrobe: Object.fromEntries(CATEGORY_CONFIG.map((category) => [category.key, []])),
};

const garmentInput = document.querySelector("#garmentInput");
const garmentStatus = document.querySelector("#garmentStatus");
const garmentThumb = document.querySelector("#garmentThumb");
const garmentPlaceholder = document.querySelector("#garmentPlaceholder");
const occasionInput = document.querySelector("#occasionInput");
const modeInput = document.querySelector("#modeInput");
const colorStrategyInput = document.querySelector("#colorStrategyInput");
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
const resultPaletteText = document.querySelector("#resultPaletteText");
const paletteRow = document.querySelector("#paletteRow");
const modeTitle = document.querySelector("#modeTitle");
const modeNarrative = document.querySelector("#modeNarrative");

const lookOneTitle = document.querySelector("#lookOneTitle");
const lookOneNarrative = document.querySelector("#lookOneNarrative");
const lookOneBottom = document.querySelector("#lookOneBottom");
const lookOneShoes = document.querySelector("#lookOneShoes");
const lookOneAccessory = document.querySelector("#lookOneAccessory");
const lookOneHat = document.querySelector("#lookOneHat");

const lookTwoTitle = document.querySelector("#lookTwoTitle");
const lookTwoNarrative = document.querySelector("#lookTwoNarrative");
const lookTwoBottom = document.querySelector("#lookTwoBottom");
const lookTwoShoes = document.querySelector("#lookTwoShoes");
const lookTwoAccessory = document.querySelector("#lookTwoAccessory");
const lookTwoHat = document.querySelector("#lookTwoHat");

const generatedImage = document.querySelector("#generatedImage");
const previewPlaceholder = document.querySelector("#previewPlaceholder");

initialize();

function initialize() {
  injectLoginPanel();
  injectWardrobePanel();
  hideLegacyAccessUi();
  bindEvents();
  renderAllWardrobeLists();
  syncStyleSelection();
  syncUI();
  bootstrapUserState().finally(syncUI);
}

function bindEvents() {
  garmentInput?.addEventListener("change", (event) => {
    loadGarment(event.target.files?.[0] || null);
  });

  occasionInput?.addEventListener("change", () => updateState("occasion", occasionInput.value));
  modeInput?.addEventListener("change", () => updateState("mode", modeInput.value));
  colorStrategyInput?.addEventListener("change", () => updateState("colorStrategy", colorStrategyInput.value));
  styleGrid?.addEventListener("click", onStylePick);
  generateButton?.addEventListener("click", generateLookImage);
  resetButton?.addEventListener("click", resetAll);

  document.querySelector("#mmLoginForm")?.addEventListener("submit", submitLogin);
  document.querySelector("#mmLogoutButton")?.addEventListener("click", logoutAccount);
  document.querySelector("#mmWardrobeOnly")?.addEventListener("change", (event) => {
    state.wardrobeOnly = Boolean(event.target.checked);
    clearGenerationState();
    syncUI();
  });

  document.querySelectorAll("[data-category-input]").forEach((input) => {
    input.addEventListener("change", (event) => {
      handleWardrobeUpload(event.target.dataset.categoryInput, event.target.files);
      event.target.value = "";
    });
  });
}

function hideLegacyAccessUi() {
  document.querySelector("#authModal")?.remove();

  const actionCopy = document.querySelector(".action-copy");
  const actionStrong = actionCopy?.querySelector("strong");
  const actionText = actionCopy?.querySelector("span");
  if (actionStrong) {
    actionStrong.textContent = "登录后即可生成双套搭配";
  }
  if (actionText) {
    actionText.textContent = "支持批量上传衣橱图片，并可只用你已有单品来搭配";
  }
}

function injectLoginPanel() {
  const hero = document.querySelector(".hero") || document.querySelector(".app-hero");
  if (!hero || document.querySelector("#mmLoginForm")) {
    return;
  }

  const panel = document.createElement("section");
  panel.className = "mm-auth-panel";
  panel.innerHTML = `
    <div class="mm-auth-copy">
      <p class="mm-auth-kicker">Account</p>
      <strong id="mmAccountTitle">登录后才可生图</strong>
      <p id="mmAccountText">只提供 5 个固定账号：test1 到 test5，密码全部都是 123456，不提供注册功能。</p>
    </div>
    <form id="mmLoginForm" class="mm-auth-form">
      <input id="mmUsername" class="mm-auth-field" type="text" placeholder="账号，例如 test1" autocomplete="username">
      <input id="mmPassword" class="mm-auth-field" type="password" placeholder="密码 123456" autocomplete="current-password">
      <button id="mmLoginButton" class="mm-auth-button" type="submit">登录账号</button>
      <button id="mmLogoutButton" class="mm-auth-link hidden" type="button">退出登录</button>
    </form>
    <p id="mmLoginFeedback" class="mm-auth-feedback">未登录时无法调用真实 AI 生图。</p>
  `;
  hero.appendChild(panel);

  const style = document.createElement("style");
  style.textContent = `
    .mm-auth-panel {
      margin-top: 18px;
      padding: 18px;
      border-radius: 20px;
      border: 1px solid rgba(14, 109, 102, 0.14);
      background: linear-gradient(135deg, rgba(255,255,255,0.9), rgba(239,249,247,0.82));
      display: grid;
      gap: 14px;
    }
    .mm-auth-kicker {
      margin: 0 0 6px;
      color: #7f341b;
      font-size: 0.78rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }
    .mm-auth-copy strong {
      display: block;
      font-size: 1.05rem;
      margin-bottom: 6px;
    }
    .mm-auth-copy p:last-child {
      margin: 0;
      color: #6c6157;
      line-height: 1.6;
    }
    .mm-auth-form {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
      align-items: center;
    }
    .mm-auth-field {
      min-height: 46px;
      border-radius: 14px;
      border: 1px solid rgba(73,57,43,0.12);
      background: rgba(255,255,255,0.94);
      padding: 0 14px;
      font: inherit;
      color: #1d1814;
    }
    .mm-auth-button,
    .mm-auth-link {
      min-height: 46px;
      border-radius: 14px;
      border: none;
      font: inherit;
      cursor: pointer;
    }
    .mm-auth-button {
      color: #fff8f2;
      background: linear-gradient(135deg, #0e6d66, #0a554f);
    }
    .mm-auth-link {
      color: #1d1814;
      background: rgba(255,255,255,0.88);
      border: 1px solid rgba(73,57,43,0.12);
    }
    .mm-auth-feedback {
      margin: 0;
      min-height: 22px;
      color: #6c6157;
      line-height: 1.5;
    }
    .mm-auth-feedback.is-error {
      color: #a23f2b;
    }
    .mm-auth-feedback.is-success {
      color: #0e6d66;
    }
    .mm-wardrobe-panel {
      margin-top: 18px;
      padding: 18px;
      border-radius: 20px;
      background: linear-gradient(135deg, rgba(255,252,246,0.95), rgba(239,247,244,0.92));
      border: 1px solid rgba(14,109,102,0.14);
      display: grid;
      gap: 14px;
    }
    .mm-wardrobe-head {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: flex-start;
    }
    .mm-wardrobe-head p,
    .mm-wardrobe-head h3,
    .mm-wardrobe-head strong {
      margin: 0;
    }
    .mm-wardrobe-toggle {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #1d1814;
      font-size: 0.94rem;
    }
    .mm-wardrobe-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }
    .mm-wardrobe-card {
      padding: 14px;
      border-radius: 18px;
      background: rgba(255,255,255,0.84);
      border: 1px solid rgba(73,57,43,0.08);
      display: grid;
      gap: 10px;
    }
    .mm-wardrobe-card strong {
      font-size: 1rem;
    }
    .mm-wardrobe-upload {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 42px;
      border-radius: 14px;
      background: rgba(14,109,102,0.1);
      color: #0e6d66;
      font-weight: 600;
      cursor: pointer;
    }
    .mm-wardrobe-upload input {
      display: none;
    }
    .mm-wardrobe-list {
      display: grid;
      gap: 8px;
    }
    .mm-wardrobe-item {
      display: grid;
      grid-template-columns: 54px 1fr auto;
      gap: 10px;
      align-items: center;
      padding: 8px;
      border-radius: 14px;
      background: rgba(255,255,255,0.88);
      border: 1px solid rgba(73,57,43,0.08);
    }
    .mm-wardrobe-thumb {
      width: 54px;
      height: 54px;
      border-radius: 12px;
      object-fit: cover;
      background: rgba(0,0,0,0.04);
    }
    .mm-wardrobe-meta strong,
    .mm-wardrobe-meta span {
      display: block;
    }
    .mm-wardrobe-meta span {
      color: #6c6157;
      font-size: 0.86rem;
      line-height: 1.4;
    }
    .mm-wardrobe-remove {
      min-height: 36px;
      padding: 0 10px;
      border-radius: 10px;
      border: 1px solid rgba(73,57,43,0.12);
      background: rgba(255,255,255,0.92);
      cursor: pointer;
    }
    .mm-wardrobe-summary {
      color: #6c6157;
      font-size: 0.92rem;
      line-height: 1.5;
    }
    @media (max-width: 760px) {
      .mm-auth-form,
      .mm-wardrobe-grid {
        grid-template-columns: 1fr;
      }
      .mm-wardrobe-item {
        grid-template-columns: 46px 1fr;
      }
      .mm-wardrobe-remove {
        grid-column: span 2;
      }
    }
  `;
  document.head.appendChild(style);
}

function injectWardrobePanel() {
  const controlPanel = document.querySelector(".control-panel") || document.querySelector(".phone-form");
  if (!controlPanel || document.querySelector("#mmWardrobeGrid")) {
    return;
  }

  const wrapper = document.createElement("section");
  wrapper.className = "mm-wardrobe-panel";
  wrapper.innerHTML = `
    <div class="mm-wardrobe-head">
      <div>
        <p class="section-label">Wardrobe</p>
        <h3>我的衣橱批量上传</h3>
        <p>可批量上传你自己的上衣、裤子、鞋子、帽子和配饰照片，也可以切换成只用你已有单品来做搭配。</p>
      </div>
      <label class="mm-wardrobe-toggle">
        <input id="mmWardrobeOnly" type="checkbox">
        <span>只搭配我自己的衣橱</span>
      </label>
    </div>
    <strong id="mmWardrobeSummary" class="mm-wardrobe-summary">还没有上传衣橱单品。</strong>
    <div id="mmWardrobeGrid" class="mm-wardrobe-grid"></div>
  `;

  if (controlPanel.classList.contains("phone-form")) {
    controlPanel.prepend(wrapper);
  } else {
    controlPanel.appendChild(wrapper);
  }

  const grid = wrapper.querySelector("#mmWardrobeGrid");
  grid.innerHTML = CATEGORY_CONFIG.map((category) => `
    <article class="mm-wardrobe-card" data-category="${category.key}">
      <strong>${category.label}</strong>
      <label class="mm-wardrobe-upload">
        <input type="file" accept="image/*" multiple data-category-input="${category.key}">
        <span>批量上传${category.label}</span>
      </label>
      <div class="mm-wardrobe-list" data-category-list="${category.key}">
        <span style="color:#6c6157;font-size:0.9rem;">还没有上传</span>
      </div>
    </article>
  `).join("");
}

function updateState(key, value) {
  state[key] = value;
  clearGenerationState();
  syncUI();
}

function loadGarment(file) {
  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = file;
  state.garmentPreviewUrl = file ? URL.createObjectURL(file) : "";
  garmentStatus && (garmentStatus.textContent = file ? file.name : "未选择");
  renderGarmentPreview();
  clearGenerationState();
  resetImageStage();
  syncUI();
}

function renderGarmentPreview() {
  if (!garmentThumb || !garmentPlaceholder) {
    return;
  }

  if (state.garmentPreviewUrl) {
    garmentThumb.src = state.garmentPreviewUrl;
    garmentThumb.classList.remove("hidden");
    garmentPlaceholder.classList.add("hidden");
    return;
  }

  garmentThumb.classList.add("hidden");
  garmentThumb.removeAttribute("src");
  garmentPlaceholder.classList.remove("hidden");
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

function handleWardrobeUpload(category, fileList) {
  const files = Array.from(fileList || []);
  if (!files.length || !state.wardrobe[category]) {
    return;
  }

  const items = files.map((file, index) => ({
    id: `${Date.now()}-${category}-${index}-${Math.random().toString(16).slice(2, 10)}`,
    name: file.name.replace(/\.[^.]+$/, ""),
    fileName: file.name,
    sizeLabel: formatFileSize(file.size),
    previewUrl: URL.createObjectURL(file),
    file,
  }));

  state.wardrobe[category] = state.wardrobe[category].concat(items);
  clearGenerationState();
  renderWardrobeList(category);
  syncUI();
}

function renderAllWardrobeLists() {
  CATEGORY_CONFIG.forEach((category) => renderWardrobeList(category.key));
}

function renderWardrobeList(category) {
  const list = document.querySelector(`[data-category-list="${category}"]`);
  if (!list) {
    return;
  }

  const items = state.wardrobe[category];
  if (!items.length) {
    list.innerHTML = `<span style="color:#6c6157;font-size:0.9rem;">还没有上传</span>`;
    return;
  }

  list.innerHTML = items.map((item) => `
    <div class="mm-wardrobe-item">
      <img class="mm-wardrobe-thumb" src="${item.previewUrl}" alt="${escapeHtml(item.name)}">
      <div class="mm-wardrobe-meta">
        <strong>${escapeHtml(item.name)}</strong>
        <span>${escapeHtml(item.fileName)} · ${item.sizeLabel}</span>
      </div>
      <button class="mm-wardrobe-remove" type="button" data-remove-wardrobe="${item.id}">移除</button>
    </div>
  `).join("");

  list.querySelectorAll("[data-remove-wardrobe]").forEach((button) => {
    button.addEventListener("click", () => removeWardrobeItem(category, button.dataset.removeWardrobe));
  });
}

function removeWardrobeItem(category, id) {
  const nextItems = [];
  for (const item of state.wardrobe[category]) {
    if (item.id === id) {
      URL.revokeObjectURL(item.previewUrl);
      continue;
    }
    nextItems.push(item);
  }

  state.wardrobe[category] = nextItems;
  clearGenerationState();
  renderWardrobeList(category);
  syncUI();
}

async function bootstrapUserState() {
  try {
    const response = await fetchJson("/api/auth/session", { method: "GET" });
    state.isLoggedIn = Boolean(response?.authenticated);
    state.username = response?.username || "";
  } catch (_error) {
    state.isLoggedIn = false;
    state.username = "";
  } finally {
    state.userChecked = true;
  }
}

async function submitLogin(event) {
  event.preventDefault();

  const usernameInput = document.querySelector("#mmUsername");
  const passwordInput = document.querySelector("#mmPassword");
  const loginButton = document.querySelector("#mmLoginButton");
  const feedback = document.querySelector("#mmLoginFeedback");

  const username = usernameInput?.value.trim() || "";
  const password = passwordInput?.value || "";

  if (!feedback) {
    return;
  }

  feedback.textContent = "正在登录账号...";
  feedback.classList.remove("is-error", "is-success");
  loginButton && (loginButton.disabled = true);

  try {
    const payload = await fetchJson("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    state.isLoggedIn = true;
    state.userChecked = true;
    state.username = payload?.username || username;
    feedback.textContent = `已登录账号 ${state.username}，现在可以直接生图。`;
    feedback.classList.add("is-success");
    if (passwordInput) {
      passwordInput.value = "";
    }
  } catch (error) {
    state.isLoggedIn = false;
    state.username = "";
    feedback.textContent = error instanceof Error ? error.message : "登录失败";
    feedback.classList.add("is-error");
  } finally {
    loginButton && (loginButton.disabled = false);
    syncUI();
  }
}

async function logoutAccount() {
  try {
    await fetchJson("/api/auth/logout", { method: "POST" });
  } catch (_error) {
    // ignore logout network issues and still clear UI state
  }

  const feedback = document.querySelector("#mmLoginFeedback");
  state.isLoggedIn = false;
  state.username = "";
  state.userChecked = true;
  state.submitting = false;
  if (feedback) {
    feedback.textContent = "已退出登录。重新登录后才可继续生图。";
    feedback.classList.remove("is-success");
    feedback.classList.add("is-error");
  }
  syncUI();
}

async function ensureLoggedIn() {
  if (!state.userChecked) {
    await bootstrapUserState();
  }

  if (state.isLoggedIn) {
    return true;
  }

  const feedback = document.querySelector("#mmLoginFeedback");
  if (feedback) {
    feedback.textContent = "请先使用 test1 到 test5 中任意一个账号登录。";
    feedback.classList.add("is-error");
    feedback.classList.remove("is-success");
  }
  document.querySelector("#mmUsername")?.focus();
  return false;
}

async function generateLookImage() {
  if (state.submitting) {
    return;
  }

  if (!state.garmentFile) {
    previewState && (previewState.textContent = "请先上传");
    previewHeadline && (previewHeadline.textContent = "先上传主上衣图片");
    previewCopy && (previewCopy.textContent = "没有主单品时，系统无法围绕它生成完整双 look 搭配图。");
    return;
  }

  if (!(await ensureLoggedIn())) {
    return;
  }

  if (state.wardrobeOnly && wardrobeCount() === 0) {
    state.lastError = "你开启了“只搭配我自己的衣橱”，但当前衣橱还是空的，请先批量上传你自己的单品图片。";
    syncUI();
    return;
  }

  setSubmitting(true);
  state.lastError = "";
  previewState && (previewState.textContent = "生成中");
  previewHeadline && (previewHeadline.textContent = "正在生成双套穿搭图");
  previewCopy && (previewCopy.textContent = state.wardrobeOnly
    ? "这次会尽量只使用你已上传的衣橱单品来完成整套搭配。"
    : "这次会围绕同一件上衣，同时给出 Look A 和 Look B 两种完整方向。");

  try {
    const garmentDataUrl = await readFileAsDataUrl(state.garmentFile);
    const wardrobePayload = await serializeWardrobe();
    const payload = await fetchJson("/api/generate-look", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        garmentDataUrl,
        style: state.style,
        occasion: state.occasion,
        mode: state.mode,
        colorStrategy: state.colorStrategy,
        wardrobeOnly: state.wardrobeOnly,
        wardrobe: wardrobePayload,
      }),
    });

    const imageSrc = payload?.imageDataUrl || payload?.imageUrl;
    if (!imageSrc) {
      throw new Error("模型已返回成功，但这次没有拿到图片结果，请重新生成。");
    }

    generatedImage && (generatedImage.src = imageSrc);
    generatedImage?.classList.remove("hidden");
    previewPlaceholder?.classList.add("hidden");
    state.generated = true;
    state.lastError = "";
    previewState && (previewState.textContent = "已生成");
    previewHeadline && (previewHeadline.textContent = "模型已经生成双套 look 图");
    previewCopy && (previewCopy.textContent = state.wardrobeOnly
      ? "当前结果已经尽量限制在你自己的衣橱范围内完成整套搭配。"
      : "当前展示的是一张双方案穿搭图，方便你直接对比两套方向。");
  } catch (error) {
    state.generated = false;
    state.lastError = error instanceof Error ? error.message : "请求失败，请稍后重试。";
    previewState && (previewState.textContent = "生成失败");
    previewHeadline && (previewHeadline.textContent = "这次没有成功出图");
    previewCopy && (previewCopy.textContent = state.lastError);
  } finally {
    setSubmitting(false);
    syncUI();
  }
}

async function serializeWardrobe() {
  const result = {};

  for (const category of CATEGORY_CONFIG) {
    result[category.key] = await Promise.all(
      state.wardrobe[category.key].map(async (item) => ({
        name: item.name,
        notes: `${category.label} / ${item.fileName}`,
        imageDataUrl: await readFileAsDataUrl(item.file),
      })),
    );
  }

  return result;
}

function wardrobeCount() {
  return CATEGORY_CONFIG.reduce((sum, category) => sum + state.wardrobe[category.key].length, 0);
}

function setSubmitting(nextValue) {
  state.submitting = nextValue;
  lookForm?.classList.toggle("is-loading", nextValue);
  generateButton && (generateButton.disabled = nextValue);
  resetButton && (resetButton.disabled = nextValue);
}

function resetAll() {
  garmentInput && (garmentInput.value = "");
  occasionInput && (occasionInput.value = "commute");
  modeInput && (modeInput.value = "balanced");
  colorStrategyInput && (colorStrategyInput.value = "toneOnTone");
  garmentStatus && (garmentStatus.textContent = "未选择");

  if (state.garmentPreviewUrl) {
    URL.revokeObjectURL(state.garmentPreviewUrl);
  }

  state.garmentFile = null;
  state.garmentPreviewUrl = "";
  state.style = "quietLuxury";
  state.occasion = "commute";
  state.mode = "balanced";
  state.colorStrategy = "toneOnTone";
  state.wardrobeOnly = false;
  clearGenerationState();
  resetImageStage();

  CATEGORY_CONFIG.forEach((category) => {
    state.wardrobe[category.key].forEach((item) => URL.revokeObjectURL(item.previewUrl));
    state.wardrobe[category.key] = [];
    renderWardrobeList(category.key);
  });

  const wardrobeToggle = document.querySelector("#mmWardrobeOnly");
  if (wardrobeToggle) {
    wardrobeToggle.checked = false;
  }

  renderGarmentPreview();
  syncStyleSelection();
  syncUI();
}

function clearGenerationState() {
  state.generated = false;
  state.lastError = "";
}

function resetImageStage() {
  generatedImage?.classList.add("hidden");
  generatedImage?.removeAttribute("src");
  previewPlaceholder?.classList.remove("hidden");
}

function syncStyleSelection() {
  document.querySelectorAll("[data-style]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.style === state.style);
  });
}

function syncUI() {
  const profile = styleProfiles[state.style] || styleProfiles.quietLuxury;
  const modeProfile = modeProfiles[state.mode] || modeProfiles.balanced;
  const colorProfile = colorProfiles[state.colorStrategy] || colorProfiles.toneOnTone;
  const looks = getLooks();

  selectedStyleName && (selectedStyleName.textContent = profile.name);
  selectedStyleText && (selectedStyleText.textContent = profile.shortText);
  resultVibe && (resultVibe.textContent = profile.name);
  resultNarrative && (resultNarrative.textContent = profile.narrative);
  resultPaletteText && (resultPaletteText.textContent = `${profile.paletteText} 当前配色策略是 ${colorProfile.name}，${colorProfile.text}`);
  modeTitle && (modeTitle.textContent = modeProfile.name);
  modeNarrative && (modeNarrative.textContent = modeProfile.text);

  if (paletteRow) {
    paletteRow.innerHTML = profile.palette.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
  }

  fillLookCard("one", looks[0]);
  fillLookCard("two", looks[1]);

  if (resultIntro) {
    if (state.generated) {
      resultIntro.textContent = `当前已经根据上衣、${profile.name}、${occasionLabels[state.occasion]}和${modeProfile.name}模式生成了两套建议。`;
    } else if (state.wardrobeOnly) {
      resultIntro.textContent = "当前已开启“只搭配我自己的衣橱”，系统会优先使用你上传的单品来完成整套方案。";
    } else {
      resultIntro.textContent = "同一件上衣，不只给一个答案，而是给你两种完整穿法。";
    }
  }

  if (generateButton) {
    generateButton.textContent = state.submitting
      ? "正在生成..."
      : state.lastError
        ? "重新生成双套穿搭图"
        : "生成双套穿搭图";
  }

  if (!state.generated) {
    if (state.lastError) {
      previewState && (previewState.textContent = "生成失败");
      previewHeadline && (previewHeadline.textContent = "这次没有成功出图");
      previewCopy && (previewCopy.textContent = state.lastError);
    } else if (!state.submitting) {
      previewState && (previewState.textContent = state.garmentFile ? "等待生成" : "等待上传");
      previewHeadline && (previewHeadline.textContent = state.garmentFile ? "先上传上衣，再生成完整双 look" : "先上传一张上衣图片");
      previewCopy && (previewCopy.textContent = state.garmentFile
        ? state.wardrobeOnly
          ? "系统会围绕这件上衣，并尽量只使用你的个人衣橱完成裤子、鞋子、帽子和配饰搭配。"
          : `系统会围绕同一件上衣，同时设计 Look A 和 Look B，并按 ${modeProfile.name} 与 ${colorProfile.name} 控制方向。`
        : "图片会先发送到后端，再由后端安全调用真实图像模型生成结果。");
    }
  }

  syncAccountPanel();
  syncWardrobeSummary();
}

function syncWardrobeSummary() {
  const summary = document.querySelector("#mmWardrobeSummary");
  if (!summary) {
    return;
  }

  const total = wardrobeCount();
  if (!total) {
    summary.textContent = "还没有上传衣橱单品。";
    return;
  }

  const detail = CATEGORY_CONFIG
    .map((category) => `${category.label}${state.wardrobe[category.key].length}件`)
    .join("，");
  summary.textContent = `当前共上传 ${total} 件衣橱单品：${detail}${state.wardrobeOnly ? "。生成时将只使用这些单品。" : "。你也可以切换为只用这些单品搭配。"}`;
}

function syncAccountPanel() {
  const title = document.querySelector("#mmAccountTitle");
  const text = document.querySelector("#mmAccountText");
  const feedback = document.querySelector("#mmLoginFeedback");
  const loginButton = document.querySelector("#mmLoginButton");
  const logoutButton = document.querySelector("#mmLogoutButton");
  const usernameInput = document.querySelector("#mmUsername");
  const passwordInput = document.querySelector("#mmPassword");

  if (!title || !text || !feedback || !loginButton || !logoutButton) {
    return;
  }

  if (state.isLoggedIn) {
    title.textContent = `当前账号：${state.username}`;
    text.textContent = "当前账号已登录，现在可以直接生图，也可以批量上传你的衣橱单品并限制只用自有衣物搭配。";
    if (!feedback.classList.contains("is-error")) {
      feedback.textContent = `登录已完成，当前使用账号 ${state.username}。`;
    }
    feedback.classList.remove("is-error");
    feedback.classList.add("is-success");
    loginButton.classList.add("hidden");
    logoutButton.classList.remove("hidden");
    usernameInput && (usernameInput.disabled = true);
    passwordInput && (passwordInput.disabled = true);
    if (usernameInput) {
      usernameInput.value = state.username;
    }
    if (passwordInput) {
      passwordInput.placeholder = "已登录";
    }
    return;
  }

  title.textContent = "登录后才可生图";
  text.textContent = "只提供 5 个固定账号：test1、test2、test3、test4、test5，密码全部都是 123456，不提供注册功能。";
  if (!feedback.classList.contains("is-error")) {
    feedback.textContent = "未登录时无法调用真实 AI 生图。";
  }
  feedback.classList.remove("is-success");
  loginButton.classList.remove("hidden");
  logoutButton.classList.add("hidden");
  if (usernameInput) {
    usernameInput.disabled = false;
  }
  if (passwordInput) {
    passwordInput.disabled = false;
    passwordInput.placeholder = "密码 123456";
  }
}

function fillLookCard(slot, look) {
  const titleNode = slot === "one" ? lookOneTitle : lookTwoTitle;
  const narrativeNode = slot === "one" ? lookOneNarrative : lookTwoNarrative;
  const bottomNode = slot === "one" ? lookOneBottom : lookTwoBottom;
  const shoesNode = slot === "one" ? lookOneShoes : lookTwoShoes;
  const accessoryNode = slot === "one" ? lookOneAccessory : lookTwoAccessory;
  const hatNode = slot === "one" ? lookOneHat : lookTwoHat;

  titleNode && (titleNode.textContent = look.title);
  narrativeNode && (narrativeNode.textContent = look.note);
  bottomNode && (bottomNode.textContent = `裤子：${look.bottom}`);
  shoesNode && (shoesNode.textContent = `鞋子：${look.shoes}`);
  accessoryNode && (accessoryNode.textContent = `配饰：${look.accessory}`);
  hatNode && (hatNode.textContent = `帽子：${look.hat}`);
}

function getLooks() {
  const primaryBottom = pickWardrobeItem("bottoms", 0, fallbackItem("bottoms", 0));
  const secondaryBottom = pickWardrobeItem("bottoms", 1, fallbackItem("bottoms", 1));
  const primaryShoes = pickWardrobeItem("shoes", 0, fallbackItem("shoes", 0));
  const secondaryShoes = pickWardrobeItem("shoes", 1, fallbackItem("shoes", 1));
  const primaryAccessory = pickWardrobeItem("accessories", 0, fallbackItem("accessories", 0));
  const secondaryAccessory = pickWardrobeItem("accessories", 1, fallbackItem("accessories", 1));
  const primaryHat = pickWardrobeItem("hats", 0, fallbackItem("hats", 0));
  const secondaryHat = pickWardrobeItem("hats", 1, fallbackItem("hats", 1));
  const occasion = occasionLabels[state.occasion] || "日常场景";
  const modeName = (modeProfiles[state.mode] || modeProfiles.balanced).name;

  return [
    {
      title: `${primaryBottom} + ${primaryShoes}`,
      bottom: primaryBottom,
      shoes: primaryShoes,
      accessory: primaryAccessory,
      hat: primaryHat,
      note: state.wardrobeOnly
        ? `Look A 会优先从你现有衣橱中挑选更稳妥、好穿、适合${occasion}的组合。`
        : `Look A 更偏实穿和稳妥，适合${occasion}，整体以${modeName}为基准。`,
    },
    {
      title: `${secondaryBottom} + ${secondaryShoes}`,
      bottom: secondaryBottom,
      shoes: secondaryShoes,
      accessory: secondaryAccessory,
      hat: secondaryHat,
      note: state.wardrobeOnly
        ? "Look B 会在你已有单品范围内做更有造型感的组合，尽量拉开风格层次。"
        : "Look B 会保留上衣主角位置，但通过更强的配件和比例感，让整体更上镜、更有记忆点。",
    },
  ];
}

function pickWardrobeItem(category, index, fallback) {
  if (!state.wardrobeOnly) {
    return fallback;
  }

  const items = state.wardrobe[category];
  if (!items.length) {
    return fallback;
  }

  return items[index]?.name || items[0].name || fallback;
}

function fallbackItem(category, index) {
  const styleItems = FALLBACK_ITEMS[state.style] || FALLBACK_ITEMS.quietLuxury;
  const values = styleItems[category] || FALLBACK_ITEMS.quietLuxury[category];
  return values[index] || values[0];
}

async function fetchJson(path, options) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    ...options,
  });

  const payload = await safeReadJson(response);
  if (!response.ok) {
    throw new Error(toUserError(payload));
  }
  return payload;
}

async function safeReadJson(response) {
  const raw = await response.text();
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (_error) {
    return { error: raw };
  }
}

function toUserError(payload) {
  const message = payload?.error || "图片生成失败。";

  if (/invalid username or password/i.test(message)) {
    return "账号或密码错误，请使用 test1 到 test5，密码为 123456。";
  }
  if (/please log in/i.test(message)) {
    return "请先登录账号后再生图。";
  }
  if (/wardrobe-only mode needs at least one wardrobe item/i.test(message)) {
    return "你开启了只用自有衣橱搭配，但还没有上传衣橱图片。";
  }
  if (/relay provider is not configured|missing image_api_key/i.test(message)) {
    return "服务端还没有配置生图 Key，请先补齐环境变量。";
  }
  if (/quota|rate limit|resource exhausted/i.test(message)) {
    return "当前生图通道额度不足或触发限流，请稍后再试。";
  }
  if (/temporarily unavailable|upstream/i.test(message)) {
    return "图像服务上游暂时不可用，请稍后重新生成。";
  }

  return `${message} 你可以点击“重新生成双套穿搭图”再试一次。`;
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("读取图片失败。"));
    reader.readAsDataURL(file);
  });
}

function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function escapeHtml(text) {
  return `${text}`
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
