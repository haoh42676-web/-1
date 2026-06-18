# Mirror Muse

一个用于“上传上衣图片，生成整套穿搭建议和整图”的网页应用。

## 当前能力

- 上传上衣图片
- 选择场景和风格
- 自动补全裤子、鞋子、配饰、帽子建议
- 通过后端调用 OpenAI-compatible 图像接口生成整套穿搭图

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
2. 在 `.env.local` 中填写你自己的图像接口配置
3. 运行：

```powershell
node server.js
```

4. 打开：

```text
http://localhost:3000
```

## 环境变量

```text
IMAGE_PROVIDER=openai-compatible-relay
IMAGE_API_KEY=your-api-key
IMAGE_BASE_URL=https://gpt.fengxiaole.top/v1
IMAGE_API_MODE=responses
IMAGE_RESPONSE_PATH=/responses
IMAGE_PATH=/images/edits
IMAGE_MODEL=gpt-5.4
IMAGE_EDIT_MODEL=gpt-image-1
IMAGE_OUTPUT_SIZE=1024x1536
IMAGE_OUTPUT_QUALITY=high
PORT=3000
```

## 给朋友使用的正确方式

这个项目不是纯静态网页，不能只靠 GitHub Pages 直接运行。

原因：

1. 需要 Node 后端处理上传和转发图像请求
2. 需要服务端保存 `IMAGE_API_KEY`，不能暴露到前端

所以如果你想让朋友直接打开链接使用，正确方式是：

1. 代码上传到 GitHub
2. 再部署到 Render、Railway 或其他支持 Node 的平台
3. 在部署平台里配置环境变量

## 生图功能现状

代码层面已经支持两种调用路径：

- `Responses API`
- `/images/edits` / `/images/generations` 兼容回退

但你当前使用的中转站在真实联调时返回过这些错误：

- `502 Upstream service temporarily unavailable`
- `503 No available compatible accounts`

这说明：

- 前端和后端链路已经接好
- 但当前中转站的图像上游并不稳定
- 所以上线后“页面能打开”不等于“生图一定成功”

## 推荐上线方式

如果你要给朋友稳定使用，建议：

1. 先上传 GitHub
2. 再部署到 Render
3. 在 Render 配置一个稳定可用的图像 API
4. 部署完成后再做一次真实上传测试

## 安全提醒

- 不要把真实 API key 提交到 GitHub
- `.env.local` 只保留在你自己电脑上
- 仓库里只提交 `.env.example`
