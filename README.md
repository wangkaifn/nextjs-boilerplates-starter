# Next.js Boilerplate Starter

🏗️ 现代化 Next.js 脚手架项目，集成 React 19、TypeScript、Tailwind CSS v4 和完整的开发工具链，包含自动化代码检查、规范化提交流程和版本发布管理。

## ✨ 特性

- ⚡️ **[Next.js 15.3.4](https://nextjs.org/)** - 最新版本，使用 App Router + Turbopack
- ⚛️ **[React 19](https://react.dev/)** - 最新版本 React
- 🦾 **[TypeScript](https://www.typescriptlang.org/)** - 类型安全开发
- 🎨 **[Tailwind CSS v4](https://tailwindcss.com/)** - 现代化 CSS 框架
- 📦 **[pnpm](https://pnpm.io/)** - 高效包管理器
- 🔍 **[ESLint](https://eslint.org/)** - 代码质量检查
- 💄 **[Prettier](https://prettier.io/)** - 代码格式化
- 🐕 **[Husky](https://typicode.github.io/husky/zh/)** - Git hooks 管理
- 🚫 **[lint-staged](https://github.com/lint-staged/lint-staged)** - 暂存文件检查
- 📝 **[Commitizen](https://github.com/commitizen/cz-cli)** - 交互式提交
- 🔒 **[Commitlint](https://commitlint.js.org/)** - 提交信息规范
- 🚀 **[Release-it](https://github.com/release-it/release-it)** - 自动化版本发布

## 🚀 快速开始

### 前置条件

- [Node.js](https://nodejs.org/) 18.18 及以上版本
- [pnpm](https://pnpm.io/) 包管理器

### 安装

```bash
# 克隆项目
git clone https://github.com/wangkaifn/nextjs-boilerplates-starter.git
cd nextjs-boilerplates-starter

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看结果。

您可以通过修改 `src/app/page.tsx` 开始编辑页面，页面会自动更新。

## 📁 项目结构

```
nextjs-boilerplates-starter/
├── docs/                     # 项目文档
│   ├── nextjs-工程化配置说明.md
│   └── nextjs-development-guide.md
├── public/                   # 静态资源
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── (auth)/          # 路由分组 - 认证页面
│   │   ├── (dashboard)/     # 路由分组 - 仪表板
│   │   ├── api/             # API 路由
│   │   ├── globals.css      # 全局样式
│   │   ├── layout.tsx       # 根布局
│   │   └── page.tsx         # 首页
│   ├── components/          # 可复用组件
│   │   ├── ui/              # 基础 UI 组件
│   │   ├── forms/           # 表单组件
│   │   ├── layout/          # 布局组件
│   │   └── common/          # 通用组件
│   ├── lib/                 # 工具库和配置
│   ├── hooks/               # 自定义 Hooks
│   ├── store/               # 状态管理
│   ├── types/               # 类型定义
│   └── styles/              # 样式文件
├── .husky/                  # Git hooks
├── .vscode/                 # VSCode 配置
├── package.json
└── README.md
```

## 💻 开发指南

### 开发流程

1. **启动开发服务器**

   ```bash
   pnpm run dev
   ```

2. **代码检查和格式化**

   ```bash
   pnpm run lint          # ESLint 检查
   pnpm run lint:fix      # 自动修复 ESLint 错误
   pnpm run format        # Prettier 格式化
   pnpm run type-check    # TypeScript 类型检查
   ```

3. **规范化提交**

   ```bash
   git add .
   pnpm run commit        # 交互式提交工具
   ```

4. **版本发布**
   ```bash
   pnpm run release:dry   # 测试发布流程
   pnpm run release:patch # 发布补丁版本
   pnpm run release:minor # 发布次要版本
   pnpm run release:major # 发布主要版本
   ```

### 可用脚本

```bash
# 开发
pnpm run dev              # 启动开发服务器（使用 Turbopack）
pnpm run build            # 构建生产版本
pnpm run start            # 启动生产服务器

# 代码质量
pnpm run lint             # 运行 ESLint 检查
pnpm run lint:fix         # 自动修复 ESLint 错误
pnpm run format           # 格式化代码
pnpm run format:check     # 检查代码格式
pnpm run type-check       # TypeScript 类型检查

# Git 工作流
pnpm run commit           # 交互式提交工具
pnpm run commitlint       # 检查提交信息

# 版本发布
pnpm run release          # 交互式发布
pnpm run release:patch    # 发布补丁版本 (x.y.Z)
pnpm run release:minor    # 发布次要版本 (x.Y.z)
pnpm run release:major    # 发布主要版本 (X.y.z)
pnpm run release:dry      # 测试发布流程
```

## 🛠️ 工程化工具

### 代码质量

- **ESLint** - JavaScript/TypeScript 代码检查
- **Prettier** - 代码格式化
- **TypeScript** - 静态类型检查

### Git 工作流

- **Husky** - Git hooks 管理
- **lint-staged** - 暂存文件检查
- **Commitizen** - 交互式提交工具
- **Commitlint** - 提交信息规范检查

### 版本管理

- **Release-it** - 自动化版本发布
- **Conventional Changelog** - 基于提交记录生成 changelog
- **Semantic Versioning** - 语义化版本管理

## 📖 文档

- [工程化配置说明](./docs/nextjs-工程化配置说明.md) - 详细的工具配置指南
- [开发规范与项目结构指南](./docs/nextjs-development-guide.md) - 代码规范和最佳实践

## 🚀 部署

### Vercel（推荐）

最简单的部署方式是使用 [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 其他平台

本项目支持部署到任何支持 Node.js 的平台：

- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**
- **Google Cloud Platform**

参考 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多。

## 🤝 贡献

欢迎贡献代码！请遵循以下步骤：

1. Fork 本项目
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 使用规范化提交 (`pnpm run commit`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

### 提交规范

本项目使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**类型 (type):**

- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式化
- `refactor`: 重构
- `perf`: 性能优化
- `test`: 测试
- `chore`: 构建过程或辅助工具的变动

## 📄 许可证

[MIT License](LICENSE)

## 🔗 相关链接

- [Next.js 文档](https://nextjs.org/docs)
- [React 文档](https://react.dev/)
- [TypeScript 文档](https://www.typescriptlang.org/docs/)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [pnpm 文档](https://pnpm.io/)
