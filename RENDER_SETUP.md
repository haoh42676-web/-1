# Render 部署清单

## 1. 连接仓库

1. 打开 Render
2. 点击 `New +`
3. 选择 `Web Service`
4. 连接 GitHub 仓库 `haoh42676-web/-1`

## 2. 基础配置

- Name: `mirror-muse`
- Runtime: `Node`
- Build Command: `echo "No build step required"`
- Start Command: `npm start`

如果 Render 识别到了仓库里的 `render.yaml`，这些通常会自动带出来。

## 3. 必填环境变量

在 Render 后台的 `Environment` 里添加：

### 通用

- `DEFAULT_IMAGE_PROVIDER` = `relay`

### ChatGPT 中转站

- `IMAGE_PROVIDER` = `openai-compatible-relay`
- `IMAGE_BASE_URL` = `https://gpt.fengxiaole.top/v1`
- `IMAGE_API_MODE` = `responses`
- `IMAGE_RESPONSE_PATH` = `/responses`
- `IMAGE_PATH` = `/images/edits`
- `IMAGE_MODEL` = `gpt-5.4`
- `IMAGE_EDIT_MODEL` = `gpt-image-1`
- `IMAGE_OUTPUT_SIZE` = `1024x1536`
- `IMAGE_OUTPUT_QUALITY` = `high`
- `IMAGE_API_KEY` = 你的真实中转站图像 key

### Gemini 官方 API

- `GEMINI_BASE_URL` = `https://generativelanguage.googleapis.com`
- `GEMINI_API_VERSION` = `v1beta`
- `GEMINI_IMAGE_MODEL` = `gemini-3.1-flash-image`
- `GEMINI_IMAGE_ASPECT_RATIO` = `3:4`
- `GEMINI_IMAGE_SIZE` = `1K`
- `GEMINI_API_KEY` = 你的 Gemini 官方 API key

Render 会自动提供 `PORT`，不用手填。

## 4. 部署完成后检查

先打开：

```text
https://你的-render-域名/api/health
```

确认返回里有：

- `"ok": true`
- `"providers.relay.configured": true` 或 `false`
- `"providers.gemini.configured": true` 或 `false`

你配置了哪个方案，对应的 `configured` 就应该是 `true`。

## 5. 真正验证生图

部署成功不代表生图一定成功，还要做两轮真实测试：

1. 用 `ChatGPT 中转站` 方案上传上衣并出图
2. 切到 `Gemini 官方 API` 方案再出图

如果失败，优先看这些错误：

- `No available compatible accounts`
- `Upstream service temporarily unavailable`
- `missing IMAGE_API_KEY`
- `missing GEMINI_API_KEY`
- `quota / rate limit / resource exhausted`

前两种通常不是页面代码问题，而是你当前接入的服务不稳定或额度不足。
