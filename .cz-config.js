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
    {
      name: "components" // 组件
    },
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
    // 选择 scope: custom 时会出下面的提示
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
  // footerPrefix: 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
