import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),


{
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
    "no-console": "error", // 警告使用 console
    "no-debugger": "error", // 禁止使用 debugger
    "prefer-const": "error", // 优先使用 const
    "no-var": "error", // 禁止使用 var
  },
},
]

export default eslintConfig
