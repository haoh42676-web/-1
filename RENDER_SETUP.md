# Render 部署清单

## 1. 连接仓库

1. 打开 Render
2. 选择 `New +`
3. 选择 `Web Service`
4. 连接 GitHub 仓库 `haoh42676-web/-1`

## 2. 基础配置

- Name: `mirror-muse`
- Runtime: `Node`
- Build Command: `echo "No build step required"`
- Start Command: `npm start`

如果 Render 识别到了仓库里的 `render.yaml`，这些通常会自动带出。

## 3. 必填环境变量

在 Render 后台的 `Environment` 里添加：

- `IMAGE_PROVIDER` = `openai-compatible-relay`
- `IMAGE_BASE_URL` = `https://gpt.fengxiaole.top/v1`
- `IMAGE_API_MODE` = `responses`
- `IMAGE_RESPONSE_PATH` = `/responses`
- `IMAGE_PATH` = `/images/edits`
- `IMAGE_MODEL` = `gpt-5.4`
- `IMAGE_EDIT_MODEL` = `gpt-image-1`
- `IMAGE_OUTPUT_SIZE` = `1024x1536`
- `IMAGE_OUTPUT_QUALITY` = `high`
- `IMAGE_API_KEY` = 你的真实图像 key

Render 会自动提供 `PORT`，不用手填。

## 4. 部署完成后检查

先打开：

```text
https://你的-render-域名/api/health
```

确认返回里有：

- `"ok": true`
- `"configured": true`

## 5. 真正验证生图

部署成功不代表生图一定成功，还要再做一次真实测试：

1. 打开首页
2. 上传一张上衣图
3. 选择场景和风格
4. 点击生成

如果失败，优先看这几类问题：

- `No available compatible accounts`
- `Upstream service temporarily unavailable`
- `missing IMAGE_API_KEY`

前两种通常不是页面代码问题，而是中转站本身当前没有可用图像能力。
