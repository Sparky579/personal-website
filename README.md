# 个人主页项目

这是一个基于Vue 3的现代化个人主页项目，具有优雅的淡蓝紫色主题设计和完整的中英双语支持。

## 功能特性

- 🎨 **现代化设计**: 淡蓝紫色主题，简洁优美的界面
- 🌍 **国际化支持**: 完整的中英双语切换功能
- 📱 **响应式布局**: 完美适配桌面端和移动端
- 🚀 **Vue 3 + Composition API**: 使用最新的Vue技术栈
- 🎯 **四大模块**: 主页、作品展示、个人简历、荣誉奖项

## 页面介绍

### 主页 (Home)
- 个人介绍和欢迎信息
- 精选作品展示
- 快速导航卡片

### 作品展示 (Works)
- 项目分类筛选
- 技术栈标签
- 项目演示和源码链接

### 个人简历 (Resume)
- 教育经历时间线
- 工作经验展示
- 技能水平可视化
- 发表论文列表

### 荣誉奖项 (Honors)
- 奖项分类展示
- 获奖级别标识
- 成就统计面板

## 技术栈

- **前端框架**: Vue 3
- **路由管理**: Vue Router 4
- **国际化**: Vue I18n 9
- **CSS**: 原生CSS + CSS变量
- **构建工具**: Vue CLI 5

## 快速开始

### 安装依赖
\`\`\`bash
npm install
\`\`\`

### 启动开发服务器
\`\`\`bash
npm run serve
\`\`\`

### 构建生产版本
\`\`\`bash
npm run build
\`\`\`

### 代码检查
\`\`\`bash
npm run lint
\`\`\`

## 自定义配置

### 个人信息配置
1. 修改 `src/components/Footer.vue` 中的联系信息
2. 更新 `src/i18n/locales/` 中的翻译文件
3. 替换各页面组件中的模拟数据

### 主题颜色自定义
在 `src/App.vue` 中的 `:root` CSS变量中修改主题色彩：
- `--primary-color`: 主色调
- `--secondary-color`: 辅助色
- `--accent-color`: 强调色

### 添加新的语言支持
1. 在 `src/i18n/locales/` 中添加新的语言文件
2. 在 `src/i18n/index.js` 中注册新语言
3. 更新语言切换组件

## 项目结构

\`\`\`
src/
├── components/          # 可复用组件
│   ├── NavBar.vue      # 导航栏
│   └── Footer.vue      # 页脚
├── views/              # 页面组件
│   ├── Home.vue        # 主页
│   ├── Works.vue       # 作品展示
│   ├── Resume.vue      # 个人简历
│   └── Honors.vue      # 荣誉奖项
├── router/             # 路由配置
│   └── index.js
├── i18n/               # 国际化配置
│   ├── index.js
│   └── locales/
│       ├── zh-CN.json  # 中文翻译
│       └── en-US.json  # 英文翻译
├── assets/             # 静态资源
├── App.vue             # 根组件
└── main.js             # 入口文件
\`\`\`

## 浏览器兼容性

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## 许可证

MIT License

## 贡献指南

欢迎提交Issue和Pull Request来改进这个项目！

---

如果你觉得这个项目对你有帮助，请给个⭐️支持一下！
