# Mirror Muse

一个用于“上传上衣图片，生成整套穿搭建议和整图”的网页应用。  
现在支持两种可切换的真实生图方案：

- `ChatGPT 中转站`
- `Gemini 官方 API`

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/haoh42676-web/-1)

一键部署入口：

[https://render.com/deploy?repo=https://github.com/haoh42676-web/-1](https://render.com/deploy?repo=https://github.com/haoh42676-web/-1)

## 当前能力

- 上传上衣图片
- 选择场景和风格
- 自动补全裤子、鞋子、配饰、帽子建议
- 选择不同生图提供方生成整套穿搭图
- 通过后端安全保存 API Key，适合 Render 部署

## 项目结构

- `index.html`：前端页面
- `styles.css`：页面样式
- `script.js`：前端交互逻辑
- `server.js`：Node 后端
- `.env.example`：环境变量示例
- `render.yaml`：Render 部署配置
- `RENDER_SETUP.md`：Render 后台填写清单

## 本地运行

1. 复制 `.env.example` 为 `.env.local`
2. 按需填写你的 `IMAGE_API_KEY` 和 / 或 `GEMINI_API_KEY`
3. 启动服务

```powershell
node server.js
```

4. 打开

```text
http://localhost:3000
```

## 环境变量

```text
DEFAULT_IMAGE_PROVIDER=relay

IMAGE_PROVIDER=openai-compatible-relay
IMAGE_API_KEY=your-relay-key
IMAGE_BASE_URL=https://gpt.fengxiaole.top/v1
IMAGE_API_MODE=responses
IMAGE_RESPONSE_PATH=/responses
IMAGE_PATH=/images/edits
IMAGE_MODEL=gpt-5.4
IMAGE_EDIT_MODEL=gpt-image-1
IMAGE_OUTPUT_SIZE=1024x1536
IMAGE_OUTPUT_QUALITY=high

GEMINI_API_KEY=your-gemini-key
GEMINI_BASE_URL=https://generativelanguage.googleapis.com
GEMINI_API_VERSION=v1beta
GEMINI_IMAGE_MODEL=gemini-3.1-flash-image
GEMINI_IMAGE_ASPECT_RATIO=3:4
GEMINI_IMAGE_SIZE=1K

PORT=3000
```

## Render 部署说明

这个项目不是纯静态网页，不能只靠 GitHub Pages 直接运行。

原因：

1. 需要 Node 后端处理上传和转发生图请求
2. 需要服务端保存 `IMAGE_API_KEY` / `GEMINI_API_KEY`
3. 需要后端统一切换不同生图提供方

部署时建议：

1. 代码上传到 GitHub
2. 用 Render 部署 Web Service
3. 在 Render 里配置环境变量
4. 部署完成后分别测试 `relay` 和 `gemini` 两种模式

## 生图功能现状

- `ChatGPT 中转站` 路线依赖你配置的中转服务稳定性
- `Gemini 官方 API` 路线依赖你自己的 `GEMINI_API_KEY`
- 页面已经支持用户手动切换两种方案
- `/api/health` 会显示两个提供方是否已配置

## 安全提醒

- 不要把真实 API Key 提交到 GitHub
- `.env.local` 只保留在你自己的电脑上
- 仓库里只提交 `.env.example`
