# Next.js 工程化配置说明文档

## 项目概述

🏗️ 现代化 Next.js 脚手架项目，集成 React 19、TypeScript、Tailwind CSS v4 和完整的开发工具链，包含自动化代码检查、规范化提交流程和版本发布管理。

### 🛠️ 技术栈

- **[Next.js](https://nextjs.org/) 15.3.4** - 最新版本，使用 App Router + Turbopack
- **[React](https://react.dev/) 19** - 最新版本 React
- **[TypeScript](https://www.typescriptlang.org/)** - 类型安全开发
- **[Tailwind CSS](https://tailwindcss.com/) v4** - 现代化 CSS 框架
- **[pnpm](https://pnpm.io/)** - 高效包管理器

### ⚙️ 开发工具链

- **[ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)** - 代码质量和格式化
- **[Husky](https://typicode.github.io/husky/zh/get-started.html) + [lint-staged](https://github.com/lint-staged/lint-staged)** - Git hooks 自动化检查
- **[Commitizen](https://github.com/commitizen/cz-cli) + [Commitlint](https://commitlint.js.org/)** - 规范化提交信息
- **[Release-it](https://github.com/release-it/release-it)** - 自动化版本发布和 changelog 生成

## 初始化项目

### 前置条件

[Node.js 18.18](https://nodejs.org/) 及以上版本  
[pnpm](https://pnpm.io/) 包管理器

### 安装

```bash
npx create-next-app@latest
```

根据下列提示选择项目需要的配置：

```bash
✔ What is your project named? › nextjs-boilerplates-starter
✔ Would you like to use TypeScript? › Yes
✔ Would you like to use ESLint? › Yes
✔ Would you like to use Tailwind CSS? › Yes
✔ Would you like your code inside a `src/` directory? › Yes
✔ Would you like to use App Router? (recommended) › Yes
✔ Would you like to use Turbopack for `next dev`? › Yes
✔ Would you like to customize the import alias (`@/*` by default)? › No
```

稍等片刻会创建一个以你的项目名称命名的文件夹并安装所需的依赖。

## [Prettier](https://prettier.io/) - 代码格式化神器

### 为什么需要 Prettier？

1. **消除代码风格争议** - 团队不再纠结于代码格式
2. **提高代码可读性** - 统一的格式让代码更易读
3. **自动化格式化** - 保存时自动格式化，提高开发效率
4. **减少 Code Review 时间** - 不再需要讨论格式问题

### 安装

```bash
# 安装 Prettier 核心
pnpm add -D prettier
# 安装 Prettier 和 ESLint 集成插件
pnpm add -D eslint-config-prettier eslint-plugin-prettier
```

相关插件链接：

- **[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)** - 禁用与 Prettier 冲突的 ESLint 规则
- **[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)** - 将 Prettier 作为 ESLint 规则运行

### 配置文件 `.prettierrc`

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": false,
  "trailingComma": "none",
  "jsxSingleQuote": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```

### 在 `package.json` 中配置格式化命令

```json
{
  "scripts": {
    "format": "prettier --write \"./**/*.{js,mjs,jsx,ts,tsx,json,css,scss,md}\"",
    "format:check": "prettier --check \"./**/*.{js,mjs,jsx,ts,tsx,json,css,scss,md}\""
  }
}
```

## [ESLint](https://eslint.org/) - 代码质量检查

[Next.js](https://nextjs.org/) 官方已经提供了 [ESLint](https://eslint.org/) 配置，我们在此基础上进行扩展。

### 配置文件 `eslint.config.mjs`

```javascript
import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

import prettierConfig from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  {
    // 指定要检查的文件类型
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: prettierPlugin // Prettier 集成
    },
    // 具体规则配置
    rules: {
      // TypeScript 规则
      "@typescript-eslint/no-unused-vars": "error", // 禁止未使用变量
      "@typescript-eslint/no-explicit-any": "warn", // 警告使用 any 类型
      "@typescript-eslint/explicit-function-return-type": "off", // 不强制函数返回类型

      // React 规则
      "react/react-in-jsx-scope": "off", // Next.js 不需要导入 React
      "react/prop-types": "off", // TypeScript 项目不需要 PropTypes
      "react-hooks/rules-of-hooks": "error", // 强制 Hooks 规则
      "react-hooks/exhaustive-deps": "warn", // 警告缺失依赖

      // 通用代码质量规则
      "no-console": "error", // 禁止使用 console
      "no-debugger": "error", // 禁止使用 debugger
      "prefer-const": "error", // 优先使用 const
      "no-var": "error" // 禁止使用 var
    }
  },
  prettierConfig
]

export default eslintConfig
```

## [Husky](https://typicode.github.io/husky/zh/get-started.html) - Git 钩子管理器

自动化执行 **检查提交信息**、**检查代码** 和 **运行测试**。

### 安装

```bash
pnpm add -D husky
# 初始化 Husky
npx husky init
```

### 配置 Git Hooks

#### Pre-commit Hook (`.husky/pre-commit`)

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged        # 检查暂存的文件
pnpm run type-check     # TypeScript 类型检查
```

#### Commit-msg Hook (`.husky/commit-msg`)

```bash
pnpm run commitlint ${1}
```

## [lint-staged](https://github.com/lint-staged/lint-staged) - 暂存文件检查

只对 Git 暂存区中的文件执行检查和格式化，提高效率。

### 安装

```bash
pnpm add -D lint-staged
```

### 配置文件 `.lintstagedrc`

```json
{
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,scss,sass}": ["prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"]
}
```

## Git 提交规范

### [Commitlint](https://commitlint.js.org/) - 验证提交信息

验证提交信息是否符合 [约定式提交规范](https://www.conventionalcommits.org/)。

### 安装

```bash
# 安装 Commitlint 核心
pnpm add -D @commitlint/cli
# 安装 conventional commits 配置规则
pnpm add -D @commitlint/config-conventional
```

相关依赖链接：

- **[@commitlint/cli](https://github.com/conventional-changelog/commitlint)** - Commitlint 命令行工具
- **[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint)** - 基于 conventional commits 的预设规则

### 配置文件 `commitlint.config.js`

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 新功能
        "fix", // 修复bug
        "docs", // 文档更新
        "style", // 代码格式化
        "refactor", // 重构
        "perf", // 性能优化
        "test", // 测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // 回滚
        "build", // 构建系统或外部依赖项的更改
        "ci" // CI配置文件和脚本的更改
      ]
    ],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72] // 标题最大长度
  }
}
```

### 在 `package.json` 中添加脚本

```json
{
  "scripts": {
    "commitlint": "commitlint --edit"
  }
}
```

## [Commitizen](https://github.com/commitizen/cz-cli) - 交互式提交工具

通过交互式命令行引导用户创建规范的提交信息。

### 安装

```bash
# 安装 Commitizen 核心
pnpm add -D commitizen
# 安装自定义配置插件
pnpm add -D cz-customizable
# 安装交互式命令行工具（指定版本）
pnpm add -D inquirer@9.3.7
```

相关依赖链接：

- **[cz-customizable](https://github.com/leoforfree/cz-customizable)** - Commitizen 自定义配置插件
- **[inquirer](https://github.com/SBoudrias/Inquirer.js)** - 交互式命令行界面

### 配置文件 `.cz-config.js`

```javascript
module.exports = {
  // type 类型（定义之后，可通过上下键选择）
  types: [
    { value: "feat", name: "feat:     ✨  新功能" },
    { value: "fix", name: "fix:      🐛  修复缺陷" },
    { value: "docs", name: "docs:     📝  文档更新" },
    { value: "style", name: "style:    💄  代码格式（不影响功能，例如空格、分号等格式修正）" },
    { value: "refactor", name: "refactor: ♻️   代码重构（不包括 bug 修复、功能新增）" },
    { value: "perf", name: "perf:     ⚡️  性能优化" },
    { value: "test", name: "test:     ✅  添加疏漏测试或已有测试改动" },
    {
      value: "chore",
      name: "chore:    🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）"
    },
    { value: "revert", name: "revert:   ⏪️  回滚 commit" },
    {
      value: "build",
      name: "build:    📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）"
    },
    { value: "ci", name: "ci:       🎡  修改 CI 配置、脚本" }
  ],

  // scope 类型（定义之后，可通过上下键选择）
  scopes: [
    { name: "components" }, // 组件
    { name: "pages" }, // 页面相关（Next.js 页面）
    { name: "api" }, // API 相关
    { name: "layout" }, // 布局相关
    { name: "hooks" }, // 钩子
    { name: "utils" }, // 工具函数
    { name: "styles" }, // 样式
    { name: "types" }, // 类型
    { name: "config" }, // 配置
    { name: "middleware" }, // 中间件
    { name: "ui" }, // UI 组件
    { name: "assets" }, // 资产
    { name: "deps" }, // 依赖
    { name: "auth" }, // 认证
    { name: "i18n" }, // 国际化
    { name: "seo" }, // SEO
    { name: "tests" }, // 测试
    { name: "docs" }, // 文档
    { name: "build" }, // 构建
    { name: "other" } // 其他
  ],

  // 覆写提示的信息
  messages: {
    type: "🚀 选择你要提交的类型:",
    scope: "💡 选择一个 scope（可选）:",
    customScope: "🎯 请输入自定义的 scope:",
    subject: "📝 填写简短精炼的变更描述:\n",
    body: '📖 填写更加详细的变更描述（可选）。使用 "|" 换行:\n',
    breaking: "💥 列举非兼容性重大的变更（可选）:\n",
    footer: "🔗 列举关联issue（可选）例如：#31, #34:\n",
    confirmCommit: "✅ 确认提交？"
  },

  // 允许自定义 scope
  allowCustomScopes: true,
  // 允许 breaking changes
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: [],

  // subject 长度限制
  subjectLimit: 100,
  // 换行符
  breaklineChar: "|" // 支持 body 和 footer
}
```

### 在 `package.json` 中配置

```json
{
  "scripts": {
    "commit": "cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  }
}
```

### 使用方法

```bash
# 交互式提交
pnpm run commit

# 运行后会出现如下交互界面：
# 🚀 选择你要提交的类型:
# ❯ feat:     ✨  新功能
#   fix:      🐛  修复缺陷
#   docs:     📝  文档更新
#   ...
#
# 💡 选择一个 scope（可选）:
# ❯ components
#   pages
#   api
#   ...
#
# 📝 填写简短精炼的变更描述:
# add user authentication
```

## [Release-it](https://github.com/release-it/release-it) - 自动化版本发布

自动化处理版本升级、标签创建、changelog 生成和 GitHub 发布。

### 安装

```bash
# 安装 Release-it 相关依赖
pnpm add -D release-it
# 安装 conventional changelog 插件
pnpm add -D @release-it/conventional-changelog
# 安装 pnpm 支持插件
pnpm add -D release-it-pnpm
# 安装 conventional changelog CLI
pnpm add -D conventional-changelog-cli
```

相关插件链接：

- **[@release-it/conventional-changelog](https://github.com/release-it/conventional-changelog)** - 基于 conventional commits 生成 changelog
- **[release-it-pnpm](https://github.com/release-it/release-it-pnpm)** - pnpm 支持插件
- **[conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog)** - conventional changelog 命令行工具

### 配置文件 `.release-it.json`

```json
{
  "$schema": "https://raw.githubusercontent.com/release-it/release-it/main/config/release-it.json",
  "git": {
    "pushRepo": "https://github.com/wangkaifn/nextjs-boilerplates-starter.git",
    "requireBranch": "main",
    "requireCleanWorkingDir": true,
    "addUntrackedFiles": false,
    "commit": true,
    "commitMessage": "chore(release): v${version}",
    "tag": true,
    "tagName": "v${version}",
    "tagAnnotation": "Release v${version}",
    "push": true,
    "pushArgs": ["--follow-tags"]
  },
  "github": {
    "release": true,
    "releaseName": "🚀 Release v${version}",
    "releaseNotes": "npx conventional-changelog-cli -p angular --outfile /dev/stdout",
    "autoGenerate": false,
    "preRelease": false,
    "draft": false,
    "tokenRef": "GITHUB_TOKEN",
    "assets": [],
    "web": true
  },
  "npm": {
    "publish": false,
    "skipChecks": true
  },
  "hooks": {
    "before:init": ["pnpm run lint", "pnpm run type-check", "pnpm run build"]
  },
  "plugins": {
    "release-it-pnpm": {
      "publishAll": false,
      "skipChecks": true
    },
    "@release-it/conventional-changelog": {
      "preset": "angular",
      "infile": "CHANGELOG.md"
    }
  }
}
```

### 在 `package.json` 中添加脚本

```json
{
  "scripts": {
    "release": "release-it",
    "release:patch": "release-it patch",
    "release:minor": "release-it minor",
    "release:major": "release-it major",
    "release:dry": "release-it --dry-run"
  }
}
```

### 设置 GitHub Token

要使用 GitHub 发布功能，需要设置环境变量：

```bash
# 设置 GitHub Personal Access Token
export GITHUB_TOKEN=your_token_here

# 或者添加到 shell 配置文件中
echo 'export GITHUB_TOKEN=your_token_here' >> ~/.zshrc
```

### 使用方法

```bash
# 测试发布流程（不会实际发布）
pnpm run release:dry

# 发布补丁版本 (0.1.0 → 0.1.1)
pnpm run release:patch

# 发布次要版本 (0.1.0 → 0.2.0)
pnpm run release:minor

# 发布主要版本 (0.1.0 → 1.0.0)
pnpm run release:major

# 交互式发布（手动选择版本类型）
pnpm run release
```

### 发布流程

Release-it 会自动执行以下步骤：

1. ✅ 运行代码检查（lint、type-check、build）
2. 📝 基于 [conventional commits](https://www.conventionalcommits.org/) 生成 changelog
3. 🔢 更新版本号
4. 📦 创建 git commit 和 tag
5. 📤 推送到 GitHub
6. 🚀 创建 GitHub Release

## 完整的 package.json 脚本

```json
{
  "name": "nextjs-boilerplates-starter",
  "version": "0.1.1",
  "description": "🏗️ 现代化 Next.js 脚手架项目 - 集成 React 19、TypeScript、Tailwind CSS v4 和完整的开发工具链",
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"./**/*.{js,mjs,jsx,ts,tsx,json,css,scss,md}\"",
    "format:check": "prettier --check \"./**/*.{js,mjs,jsx,ts,tsx,json,css,scss,md}\"",
    "prepare": "husky",
    "type-check": "tsc --noEmit",
    "commitlint": "commitlint --edit",
    "commit": "cz",
    "release": "release-it",
    "release:patch": "release-it patch",
    "release:minor": "release-it minor",
    "release:major": "release-it major",
    "release:dry": "release-it --dry-run"
  }
}
```

## 工作流程

### 日常开发流程

1. **开发功能**

   ```bash
   pnpm run dev  # 启动开发服务器
   ```

2. **代码检查**

   ```bash
   pnpm run lint        # ESLint 检查
   pnpm run format      # Prettier 格式化
   pnpm run type-check  # TypeScript 类型检查
   ```

3. **提交代码**

   ```bash
   git add .
   pnpm run commit  # 交互式提交
   ```

4. **版本发布**
   ```bash
   pnpm run release:patch  # 发布新版本
   ```

### 自动化检查

- **Pre-commit**: 自动运行 lint-staged 和类型检查
- **Commit-msg**: 自动验证提交信息格式
- **Release**: 自动生成 changelog 和 GitHub Release

## 常见问题

### 1. Husky 钩子不生效

```bash
# 重新安装 husky
rm -rf .husky
npx husky init
```

### 2. ESLint 报错

```bash
# 自动修复 ESLint 错误
pnpm run lint:fix
```

### 3. Prettier 格式化问题

```bash
# 检查格式化问题
pnpm run format:check
# 自动格式化
pnpm run format
```

### 4. 提交信息不符合规范

按照 [Conventional Commits](https://www.conventionalcommits.org/) 格式提交：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

例如：

- `feat(auth): add user login functionality`
- `fix(ui): resolve button styling issue`
- `docs(readme): update installation guide`

## 工具链接汇总

### 🛠️ 核心技术栈

| 工具                                          | 官方文档                        | 说明                         |
| --------------------------------------------- | ------------------------------- | ---------------------------- |
| [Next.js](https://nextjs.org/)                | https://nextjs.org/             | React 全栈框架               |
| [React](https://react.dev/)                   | https://react.dev/              | 用户界面库                   |
| [TypeScript](https://www.typescriptlang.org/) | https://www.typescriptlang.org/ | 类型安全的 JavaScript        |
| [Tailwind CSS](https://tailwindcss.com/)      | https://tailwindcss.com/        | 实用程序优先的 CSS 框架      |
| [pnpm](https://pnpm.io/)                      | https://pnpm.io/                | 快速、节省磁盘空间的包管理器 |
| [Node.js](https://nodejs.org/)                | https://nodejs.org/             | JavaScript 运行时环境        |

### ⚙️ 开发工具链

| 工具                                                          | 官方文档                                   | 说明                               |
| ------------------------------------------------------------- | ------------------------------------------ | ---------------------------------- |
| [ESLint](https://eslint.org/)                                 | https://eslint.org/                        | JavaScript/TypeScript 代码检查工具 |
| [Prettier](https://prettier.io/)                              | https://prettier.io/                       | 代码格式化工具                     |
| [Husky](https://typicode.github.io/husky/zh/get-started.html) | https://typicode.github.io/husky/zh/       | Git hooks 管理工具                 |
| [lint-staged](https://github.com/lint-staged/lint-staged)     | https://github.com/lint-staged/lint-staged | 对暂存文件运行 linters             |
| [Commitlint](https://commitlint.js.org/)                      | https://commitlint.js.org/                 | 提交信息规范检查                   |
| [Commitizen](https://github.com/commitizen/cz-cli)            | https://github.com/commitizen/cz-cli       | 交互式提交工具                     |
| [Release-it](https://github.com/release-it/release-it)        | https://github.com/release-it/release-it   | 自动化版本发布工具                 |

### 🔌 插件和扩展

| 插件                                                                                           | 官方文档                                                         | 说明                              |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | --------------------------------- |
| [cz-customizable](https://github.com/leoforfree/cz-customizable)                               | https://github.com/leoforfree/cz-customizable                    | Commitizen 自定义配置             |
| [@release-it/conventional-changelog](https://github.com/release-it/conventional-changelog)     | https://github.com/release-it/conventional-changelog             | Release-it changelog 插件         |
| [release-it-pnpm](https://github.com/release-it/release-it-pnpm)                               | https://github.com/release-it/release-it-pnpm                    | Release-it pnpm 支持              |
| [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog) | https://github.com/conventional-changelog/conventional-changelog | conventional changelog 命令行工具 |
| [inquirer](https://github.com/SBoudrias/Inquirer.js)                                           | https://github.com/SBoudrias/Inquirer.js                         | 交互式命令行界面                  |

### 📜 规范标准

| 规范                                                         | 官方文档                             | 说明           |
| ------------------------------------------------------------ | ------------------------------------ | -------------- |
| [Conventional Commits](https://www.conventionalcommits.org/) | https://www.conventionalcommits.org/ | 提交信息规范   |
| [Semantic Versioning](https://semver.org/)                   | https://semver.org/                  | 语义化版本规范 |

## 总结

通过本配置，项目具备了：

- ✅ **代码质量保证** - [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)
- ✅ **自动化检查** - [Husky](https://typicode.github.io/husky/zh/) + [lint-staged](https://github.com/lint-staged/lint-staged)
- ✅ **规范化提交** - [Commitizen](https://github.com/commitizen/cz-cli) + [Commitlint](https://commitlint.js.org/)
- ✅ **版本管理** - [Release-it](https://github.com/release-it/release-it) + [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog)
- ✅ **开发体验** - 统一工具链和工作流

这套工程化配置适用于个人项目和团队协作，确保代码质量和开发效率。
