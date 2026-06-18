# Mirror Muse

一个适合普通消费者使用的 AI 穿搭网页。

用户上传一件上衣后，可以选择场景、搭配模式、配色方向和风格，系统会：

- 先给出两套完整穿搭建议
- 再生成一张包含 Look A 和 Look B 的双方案穿搭图
- 每套都包含裤子或裙子、鞋子、配饰和帽子或发型方向

当前版本为单接口线上版，使用你已经配置好的图像中转服务进行生图，适合部署到 Render。

[线上地址](https://mirror-muse.onrender.com)

## 当前功能

- 上传上衣图片
- 选择 7 种场景
- 选择 7 种搭配模式
- 选择 6 种配色方向
- 选择 8 种穿搭风格
- 一次生成两套穿搭建议
- 生成一张双方案 AI 穿搭图
- 后端安全保存图像 Key，适合 Render 部署

## 项目结构

- `index.html`：前端页面
- `styles.css`：界面样式
- `script.js`：前端交互和搭配建议逻辑
- `server.js`：Node 服务端和图像转发逻辑
- `.env.example`：环境变量示例
- `render.yaml`：Render 部署配置

## 本地运行

1. 复制 `.env.example` 为 `.env.local`
2. 填写你的 `IMAGE_API_KEY`
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

PORT=3000
```

## Render 部署说明

这个项目不是纯静态网页，不能直接用 GitHub Pages。

原因：

1. 需要 Node 后端处理图片上传和转发生图请求
2. 需要服务端保存 `IMAGE_API_KEY`
3. 需要统一处理图像接口报错和回退逻辑

Render 中至少要配置：

- `IMAGE_API_KEY`

其余默认值已经写入 `render.yaml`。

## 说明

- 如果网页能打开但生图失败，通常是上游图像服务临时不可用或额度不足
- `/api/health` 可以用来检查服务是否在线，以及 Key 是否已经配置
- 不要把真实 `IMAGE_API_KEY` 提交到 GitHub
