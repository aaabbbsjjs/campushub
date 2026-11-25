# Campus Hub 校园效率站

一个聚焦校园日常效率的前端网站原型，围绕快递取件、课程助手、事务申请与个人待办组织信息。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000` 即可查看。生产构建使用 `npm run build`，输出目录为 `dist/`。

## 页面内容

首页提供快递超时提醒、今日课程、待办管理、事务申请入口、失物招领和校园活动等模块。搜索、导航切换、待办勾选、新建待办和清除完成事项均有前端交互反馈。

## 技术栈

Vite + 原生 HTML/CSS/JavaScript。页面不依赖后端，可直接部署到 GitHub Pages、Vercel、Netlify 等静态托管服务。
