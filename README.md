# Mirror Muse

一个适合普通消费者使用的 AI 穿搭网页。

用户上传一件上衣后，可以选择场景、搭配模式、配色方向和风格，系统会：

- 先给出两套完整穿搭建议
- 再生成一张包含 Look A 和 Look B 的双方案穿搭图
- 每套都包含裤子或裙子、鞋子、配饰和帽子或发型方向

当前版本为单接口线上版，使用已配置的图像中转服务进行生图，适合部署到 Render。

[线上地址](https://mirror-muse.onrender.com)

## 当前功能

- 上传上衣图片
- 选择 7 种场景
- 选择 7 种搭配模式
- 选择 6 种配色方向
- 选择 8 种穿搭风格
- 一次生成两套穿搭建议
- 生成一张双方案 AI 穿搭图
- 点击生成前需要先验证 4 位访问码
- 后端安全保存图像 Key 和访问码校验配置，适合 Render 部署

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
3. 填写服务端认证密钥
4. 启动服务

```powershell
node server.js
```

5. 打开

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

ACCESS_CODE_PROOF=6a2004e012c5c953d4d6fc8c094394fd46b1bc59aec81857e77b4d8cb3d8aea9
ACCESS_CODE_HMAC_SECRET=your-private-server-secret
ACCESS_SESSION_SECRET=your-private-session-secret

PORT=3000
```

## 访问码说明

- 前端不会保存明文访问码
- 服务端只保存访问码校验所需的 proof
- 实际验证依赖服务端 secret 计算 HMAC
- 验证成功后，服务器会下发短时 HttpOnly session cookie
- 服务端带有限流，减少 4 位码被连续撞库的风险

说明：

- 因为你指定的是 `1111` 这种 4 位码，它本身不属于高强度口令
- 这套方案解决的是“不在前端明文暴露”和“避免直接从仓库反推”
- 如果以后要更安全，建议把访问码升级成 6 位以上，或改成账号体系

## Render 部署说明

这个项目不是纯静态网页，不能直接用 GitHub Pages。

原因：

1. 需要 Node 后端处理图片上传和转发生图请求
2. 需要服务端保存 `IMAGE_API_KEY`
3. 需要服务端保存访问码校验配置
4. 需要统一处理图像接口报错、认证和回退逻辑

Render 中至少要配置：

- `IMAGE_API_KEY`
- `ACCESS_CODE_HMAC_SECRET`
- `ACCESS_SESSION_SECRET`

`ACCESS_CODE_PROOF` 已经可以直接写入 Render，默认对应当前 4 位码方案。

## 说明

- 如果网页能打开但生图失败，通常是上游图像服务临时不可用或额度不足
- `/api/health` 可以用来检查服务是否在线，以及图像 Key 是否已经配置
- 不要把真实 `IMAGE_API_KEY`、`ACCESS_CODE_HMAC_SECRET`、`ACCESS_SESSION_SECRET` 提交到 GitHub
