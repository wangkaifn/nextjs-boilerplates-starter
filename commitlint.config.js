module.exports = {
  extends: ["@commitlint/config-conventional"],
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
