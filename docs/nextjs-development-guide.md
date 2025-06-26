# Next.js 开发规范与项目结构指南

## 目录

- [项目概述](#项目概述)
- [项目结构](#项目结构)
- [命名规范](#命名规范)
- [组件开发规范](#组件开发规范)
- [TypeScript 使用规范](#typescript-使用规范)
- [样式规范](#样式规范)
- [文件组织规范](#文件组织规范)
- [代码质量规范](#代码质量规范)
- [性能最佳实践](#性能最佳实践)
- [SEO 最佳实践](#seo-最佳实践)
- [开发工具配置](#开发工具配置)
- [最佳实践检查清单](#最佳实践检查清单)

## 项目概述

🏗️ 现代化 Next.js 脚手架项目，集成 React 19、TypeScript、Tailwind CSS v4 和完整的开发工具链，提供统一的代码规范和项目结构指南。

### 🛠️ 技术栈

- **Next.js 15.3.4** - 使用 App Router + Turbopack
- **React 19** - 最新版本 React
- **TypeScript** - 类型安全开发
- **Tailwind CSS v4** - 现代化 CSS 框架
- **pnpm** - 高效包管理器

## 项目结构

### 完整目录结构

```
nextjs-boilerplates-starter/
├── .vscode/                  # VSCode 配置
│   ├── settings.json         # 工作区设置
│   ├── extensions.json       # 推荐扩展
│   └── launch.json          # 调试配置
├── docs/                    # 项目文档
│   ├── nextjs-development-guide.md
│   ├── api-documentation.md
│   └── deployment-guide.md
├── public/                  # 静态资源
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-banner.jpg
│   │   └── icons/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # 路由分组 - 认证页面
│   │   │   ├── login/
│   │   │   │   ├── page.tsx
│   │   │   │   └── loading.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx  # 认证布局
│   │   ├── (dashboard)/    # 路由分组 - 仪表板
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   └── error.tsx
│   │   │   ├── users/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── [id]/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── edit/page.tsx
│   │   │   │   └── components/
│   │   │   │       ├── user-list.tsx
│   │   │   │       ├── user-card.tsx
│   │   │   │       └── user-form.tsx
│   │   │   └── layout.tsx  # 仪表板布局
│   │   ├── api/            # API 路由
│   │   │   ├── auth/
│   │   │   │   ├── login/route.ts
│   │   │   │   ├── logout/route.ts
│   │   │   │   └── refresh/route.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts    # GET/POST /api/users
│   │   │   │   └── [id]/route.ts # GET/PUT/DELETE /api/users/[id]
│   │   │   └── upload/route.ts
│   │   ├── globals.css     # 全局样式
│   │   ├── layout.tsx      # 根布局
│   │   ├── page.tsx        # 首页
│   │   ├── loading.tsx     # 全局加载页面
│   │   ├── error.tsx       # 全局错误页面
│   │   └── not-found.tsx   # 404页面
│   ├── components/         # 可复用组件
│   │   ├── ui/            # 基础UI组件
│   │   │   ├── button/
│   │   │   │   ├── index.ts
│   │   │   │   ├── button.tsx
│   │   │   │   ├── button.test.tsx
│   │   │   │   └── button.stories.tsx
│   │   │   ├── input/
│   │   │   ├── card/
│   │   │   ├── modal/
│   │   │   └── index.ts    # 统一导出
│   │   ├── forms/         # 表单组件
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   └── index.ts
│   │   ├── layout/        # 布局组件
│   │   │   ├── header/
│   │   │   │   ├── index.ts
│   │   │   │   ├── header.tsx
│   │   │   │   └── components/
│   │   │   │       ├── navigation.tsx
│   │   │   │       ├── user-menu.tsx
│   │   │   │       └── search-bar.tsx
│   │   │   ├── footer/
│   │   │   ├── sidebar/
│   │   │   └── index.ts
│   │   ├── common/        # 通用组件
│   │   │   ├── loading-spinner.tsx
│   │   │   ├── error-boundary.tsx
│   │   │   ├── page-title.tsx
│   │   │   └── index.ts
│   │   └── providers/     # Context Providers
│   │       ├── auth-provider.tsx
│   │       ├── theme-provider.tsx
│   │       └── index.ts
│   ├── lib/               # 工具库和配置
│   │   ├── utils.ts       # 通用工具函数
│   │   ├── constants.ts   # 应用常量
│   │   ├── validations.ts # 表单验证规则
│   │   ├── auth.ts        # 认证相关工具
│   │   ├── api.ts         # API 客户端配置
│   │   ├── database.ts    # 数据库连接
│   │   └── types.ts       # 全局类型定义
│   ├── hooks/             # 自定义Hooks
│   │   ├── useAuth.ts
│   │   ├── useLocalStorage.ts
│   │   ├── useDebounce.ts
│   │   ├── useApi.ts
│   │   └── index.ts
│   ├── store/             # 状态管理
│   │   ├── slices/
│   │   │   ├── authSlice.ts
│   │   │   ├── userSlice.ts
│   │   │   └── uiSlice.ts
│   │   ├── store.ts
│   │   └── index.ts
│   ├── types/             # 类型定义
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── api.ts
│   │   └── index.ts
│   ├── styles/            # 样式文件
│   │   ├── globals.css
│   │   ├── components.css
│   │   └── utilities.css
│   └── middleware.ts      # Next.js 中间件
├── tests/                 # 测试文件
│   ├── __mocks__/
│   ├── utils/
│   └── setup.ts
├── .env.local             # 本地环境变量
├── .env.example           # 环境变量示例
├── .gitignore
├── .prettierrc
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

### 🗂️ 核心目录详解

#### `src/app/` - App Router 页面

- **路由分组**: 使用 `()` 创建逻辑分组，不影响 URL
- **特殊文件**: `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`
- **API 路由**: 在 `api/` 目录下使用 `route.ts`

#### `src/components/` - 组件库

- **ui/**: 基础 UI 组件，可复用性最高
- **forms/**: 特定的表单组件
- **layout/**: 页面布局相关组件
- **common/**: 通用功能组件

#### `src/lib/` - 工具库

- 所有工具函数、配置、常量的统一管理
- 每个文件职责单一，便于维护

#### `src/hooks/` - 自定义 Hooks

- 业务逻辑的封装和复用
- 状态管理和副作用处理

## 命名规范

### 1. 文件和目录命名

#### 文件命名约定

```bash
# ✅ 组件文件 - 使用 kebab-case
user-profile.tsx
header-navigation.tsx
product-card.tsx

# ✅ 页面文件 - 遵循 Next.js 路由规范
page.tsx
layout.tsx
loading.tsx
error.tsx
not-found.tsx

# ✅ 工具文件 - 使用 kebab-case
format-utils.ts
api-helpers.ts
validation-rules.ts

# ❌ 避免的命名
UserProfile.tsx        # 不使用 PascalCase
userProfile.tsx        # 不使用 camelCase
formatUtils.ts         # 不使用 camelCase
```

#### 目录命名约定

```bash
# ✅ 使用 kebab-case
src/components/user-profile/
src/lib/api-helpers/
src/hooks/use-local-storage/

# ❌ 避免的命名
src/components/userProfile/
src/lib/ApiHelpers/
src/hooks/useLocalStorage/
```

### 2. 组件命名规范

#### React 组件

```typescript
// ✅ 文件名使用 kebab-case，组件名使用 PascalCase
// 文件名: user-profile-card.tsx
export const UserProfileCard = () => {
  return <div>用户卡片</div>
}

// 文件名: navigation-header.tsx
export const NavigationHeader = () => {
  return <header>导航头部</header>
}

// ❌ 避免的命名
const usercard = () => {}     // 组件名应该用 PascalCase
const Nav = () => {}          // 名称太简短
const BUTTON = () => {}       // 不要全大写
```

### 3. 常见功能英文命名速查表

#### UI 组件命名

```typescript
// ✅ 基础组件
button.tsx          // 按钮
input.tsx           // 输入框
textarea.tsx        // 文本域
select.tsx          // 下拉选择
checkbox.tsx        // 复选框
radio.tsx           // 单选框
switch.tsx          // 开关
slider.tsx          // 滑块
progress.tsx        // 进度条
avatar.tsx          // 头像
badge.tsx           // 徽章
tag.tsx             // 标签
divider.tsx         // 分割线

// ✅ 布局组件
header.tsx          // 页头
footer.tsx          // 页脚
sidebar.tsx         // 侧边栏
navbar.tsx          // 导航栏
navigation.tsx      // 导航
breadcrumb.tsx      // 面包屑
pagination.tsx      // 分页
grid.tsx            // 网格
container.tsx       // 容器
wrapper.tsx         // 包装器
section.tsx         // 区块
panel.tsx           // 面板
card.tsx            // 卡片

// ✅ 反馈组件
modal.tsx           // 模态框/弹窗
dialog.tsx          // 对话框
drawer.tsx          // 抽屉
popover.tsx         // 气泡弹出框
tooltip.tsx         // 工具提示
dropdown.tsx        // 下拉菜单
toast.tsx           // 轻提示
notification.tsx    // 通知
alert.tsx           // 警告提示
loading.tsx         // 加载
spinner.tsx         // 加载旋转器
skeleton.tsx        // 骨架屏

// ✅ 数据展示
table.tsx           // 表格
list.tsx            // 列表
tree.tsx            // 树形控件
carousel.tsx        // 轮播图
tabs.tsx            // 标签页
accordion.tsx       // 手风琴
collapse.tsx        // 折叠面板
timeline.tsx        // 时间线
calendar.tsx        // 日历
chart.tsx           // 图表
```

#### 页面功能命名

```typescript
// ✅ 认证相关
login.tsx           // 登录
register.tsx        // 注册
signup.tsx          // 注册（同register）
signin.tsx          // 登录（同login）
logout.tsx          // 登出
forgot-password.tsx // 忘记密码
reset-password.tsx  // 重置密码
verify-email.tsx    // 邮箱验证

// ✅ 用户相关
profile.tsx         // 个人资料
settings.tsx        // 设置
account.tsx         // 账户
dashboard.tsx       // 仪表板
overview.tsx        // 概览

// ✅ 内容管理
create.tsx          // 创建
edit.tsx            // 编辑
update.tsx          // 更新
delete.tsx          // 删除
detail.tsx          // 详情
preview.tsx         // 预览
list.tsx            // 列表
search.tsx          // 搜索

// ✅ 商业功能
cart.tsx            // 购物车
checkout.tsx        // 结账
payment.tsx         // 支付
order.tsx           // 订单
shipping.tsx        // 配送
```

#### 状态和动作命名

```typescript
// ✅ 状态命名 - 使用 is/has/can/should 前缀
const isLoading = true // 是否加载中
const isOpen = false // 是否打开
const isVisible = true // 是否可见
const isDisabled = false // 是否禁用
const isActive = true // 是否激活
const isSelected = false // 是否选中
const hasError = false // 是否有错误
const hasData = true // 是否有数据
const canEdit = true // 是否可编辑
const shouldUpdate = false // 是否应该更新

// ✅ 动作命名 - 使用动词开头
const handleOpen = () => {} // 处理打开
const handleClose = () => {} // 处理关闭
const handleToggle = () => {} // 处理切换
const handleSubmit = () => {} // 处理提交
const handleChange = () => {} // 处理变化
const handleClick = () => {} // 处理点击
const handleSelect = () => {} // 处理选择
const handleDelete = () => {} // 处理删除

// ✅ 数据获取命名
const fetchUser = () => {} // 获取用户
const getUsers = () => {} // 获取用户列表
const createUser = () => {} // 创建用户
const updateUser = () => {} // 更新用户
const deleteUser = () => {} // 删除用户
```

#### API 路由命名

```typescript
// ✅ RESTful API 命名约定
;/api/ahtu /
  login / // POST - 登录
  api /
  auth /
  logout / // POST - 登出
  api /
  auth /
  refresh / // POST - 刷新token
  api /
  users / // GET - 获取用户列表, POST - 创建用户
  api /
  users /
  [id] / // GET - 获取用户, PUT - 更新用户, DELETE - 删除用户
  api /
  users /
  [id] /
  avatar / // POST - 上传头像
  api /
  posts / // GET - 获取文章列表, POST - 创建文章
  api /
  posts /
  [id] / // GET - 获取文章, PUT - 更新文章, DELETE - 删除文章
  api /
  posts /
  [id] /
  like / // POST - 点赞, DELETE - 取消点赞
  api /
  upload /
  image / // POST - 上传图片
  api /
  search /
  users // GET - 搜索用户
```

### 4. 变量和函数命名

#### 变量命名

```typescript
// ✅ 描述性变量名 - 使用 camelCase
const userName = "John"
const userAccountBalance = 1000
const isEmailVerified = true
const totalProductCount = 50
const maxRetryAttempts = 3

// ❌ 避免的变量名
const n = "John" // 太简短
const flag = true // 不够描述性
const data = 1000 // 太泛化
const temp = 50 // 临时变量也要有意义
const x = 3 // 无意义的名称
```

#### 函数命名

```typescript
// ✅ 动词开头，描述性强
const getUserById = (id: string) => {}
const validateEmailFormat = (email: string) => {}
const formatCurrency = (amount: number) => {}
const calculateTotalPrice = (items: CartItem[]) => {}
const sendEmailNotification = (to: string, message: string) => {}

// ❌ 避免的函数名
const user = (id: string) => {} // 不是动词开头
const check = (email: string) => {} // 太泛化
const doSomething = () => {} // 无意义
const process = () => {} // 不够具体
const helper = () => {} // 太泛化
```

### 5. 命名最佳实践

#### ✅ 推荐做法

1. **保持一致性** - 整个项目使用统一的命名约定
2. **语义化命名** - 名称应该清楚表达功能或用途
3. **避免缩写** - 使用完整单词而非缩写
4. **遵循约定** - 按照 React/Next.js 社区的命名习惯
5. **英文优先** - 使用英文命名，避免中英文混合

#### ❌ 命名禁忌

```typescript
// ❌ 避免的命名方式
data.tsx // 太泛化，不够具体
item.tsx // 太泛化，不够具体
comp.tsx // 使用缩写
MyBtn.tsx // 中英文混合
user_card.tsx // 使用下划线
COMPONENT.tsx // 全大写
temp - file.tsx // 临时性命名

// ✅ 推荐的命名方式
user - data.tsx // 具体明确
product - item.tsx // 语义清晰
button.tsx // 完整单词
user - button.tsx // 纯英文
user - card.tsx // kebab-case
sidebar - menu.tsx // 描述性强
```

---

_下一部分将继续介绍组件开发规范和 TypeScript 使用规范..._

## 组件开发规范

### 1. 组件结构标准

```typescript
// ✅ 推荐的组件结构
// 文件名: user-card.tsx
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/user";

// Props 接口定义
interface UserCardProps {
  user: User;
  className?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

// 主组件
export const UserCard: React.FC<UserCardProps> = ({
  user,
  className,
  onEdit,
  onDelete,
}) => {
  // 状态声明
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 事件处理函数
  const handleEdit = () => {
    setIsEditing(true);
    onEdit?.();
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteUser(user.id);
      onDelete?.();
    } catch (error) {
      console.error('删除用户失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 渲染逻辑
  return (
    <div className={cn("user-card p-4 border rounded-lg", className)}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <div className="space-x-2">
          <Button variant="outline" onClick={handleEdit}>
            编辑
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "删除中..." : "删除"}
          </Button>
        </div>
      </div>
    </div>
  );
};

// 默认导出
export default UserCard;
```

### 2. Props 接口设计

```typescript
// ✅ 明确的 Props 接口
interface ButtonProps {
  variant: "primary" | "secondary" | "outline" | "destructive"
  size: "sm" | "md" | "lg"
  disabled?: boolean
  loading?: boolean
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

// ✅ 继承 HTML 元素属性
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

// ✅ 使用泛型 Props
interface SelectProps<T> {
  options: Array<{ label: string; value: T }>
  value?: T
  onChange?: (value: T) => void
  placeholder?: string
  disabled?: boolean
}

// ✅ 联合类型 Props
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  size?: "sm" | "md" | "lg" | "xl"
  children: React.ReactNode
  closeOnOverlayClick?: boolean
  showCloseButton?: boolean
}
```

### 3. 组件导入导出约定

```typescript
// ✅ 组件文件内部
// 文件名: button.tsx
export const Button: React.FC<ButtonProps> = props => {
  // 组件实现
}

export default Button

// ✅ 统一导出文件 (index.ts)
export { Button } from "./button"
export { Input } from "./input"
export { Card } from "./card"
export { Modal } from "./modal"

// ✅ 使用时的导入方式
import { Button, Input } from "@/components/ui"
// 或
import Button from "@/components/ui/button"
```

### 4. 组件文件组织

```
// ✅ 推荐的组件文件结构
components/ui/button/
├── index.ts              # 导出文件
├── button.tsx            # 主组件
├── button.test.tsx       # 单元测试
├── button.stories.tsx    # Storybook 故事
└── types.ts              # 类型定义（如果复杂）
```

### 5. 条件渲染和列表渲染

```typescript
// ✅ 条件渲染最佳实践
const UserProfile = ({ user, isOwner }: UserProfileProps) => {
  return (
    <div className="user-profile">
      <h1>{user.name}</h1>

      {/* 简单条件渲染 */}
      {user.avatar && (
        <img src={user.avatar} alt={`${user.name}的头像`} />
      )}

      {/* 复杂条件渲染 */}
      {isOwner ? (
        <div className="owner-actions">
          <Button onClick={handleEdit}>编辑资料</Button>
          <Button onClick={handleSettings}>设置</Button>
        </div>
      ) : (
        <div className="visitor-actions">
          <Button onClick={handleFollow}>关注</Button>
          <Button onClick={handleMessage}>私信</Button>
        </div>
      )}

      {/* 多重条件渲染 */}
      {user.status === "active" && (
        <Badge variant="success">活跃用户</Badge>
      )}
      {user.status === "inactive" && (
        <Badge variant="warning">非活跃用户</Badge>
      )}
      {user.status === "banned" && (
        <Badge variant="danger">已封禁</Badge>
      )}
    </div>
  );
};

// ✅ 列表渲染最佳实践
const UserList = ({ users }: UserListProps) => {
  return (
    <div className="user-list">
      {users.length > 0 ? (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <EmptyState
          title="暂无用户"
          description="还没有注册的用户"
        />
      )}
    </div>
  );
};
```

## TypeScript 使用规范

### 1. 类型定义最佳实践

```typescript
// ✅ 接口定义 - 用于对象类型
interface User {
  id: string
  name: string
  email: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
}

// ✅ 类型别名 - 用于联合类型和原始类型
type Status = "pending" | "approved" | "rejected"
type Theme = "light" | "dark"
type UserId = string

// ✅ 泛型接口 - 提高复用性
interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
  error?: string
}

interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// ✅ 工具类型的使用
interface CreateUserRequest extends Pick<User, "name" | "email"> {
  password: string
}

interface UpdateUserRequest extends Partial<Pick<User, "name" | "email" | "avatar">> {
  id: string
}

type UserKeys = keyof User // "id" | "name" | "email" | "avatar" | "createdAt" | "updatedAt"
type PublicUser = Omit<User, "email"> // 排除敏感信息
```

### 2. 类型文件组织

```typescript
// types/user.ts - 用户相关类型
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: UserRole
  status: UserStatus
  createdAt: Date
  updatedAt: Date
}

export type UserRole = "admin" | "user" | "moderator"
export type UserStatus = "active" | "inactive" | "banned"

export interface CreateUserRequest {
  name: string
  email: string
  password: string
  role?: UserRole
}

export interface UpdateUserRequest extends Partial<CreateUserRequest> {
  id: string
}

// types/api.ts - API 相关类型
export interface ApiResponse<T = any> {
  data: T
  message: string
  success: boolean
  error?: string
}

export interface ApiError {
  code: string
  message: string
  details?: Record<string, any>
}

// types/common.ts - 通用类型
export interface SelectOption<T = string> {
  label: string
  value: T
  disabled?: boolean
}

export interface PaginationParams {
  page: number
  limit: number
  sortBy?: string
  sortOrder?: "asc" | "desc"
}
```

### 3. 严格类型检查

```typescript
// ✅ 避免 any 类型，使用 unknown
const processData = (data: unknown): string => {
  if (typeof data === "string") {
    return data.toUpperCase()
  }
  if (typeof data === "number") {
    return data.toString()
  }
  return JSON.stringify(data)
}

// ✅ 类型守卫函数
const isUser = (obj: any): obj is User => {
  return (
    obj &&
    typeof obj === "object" &&
    typeof obj.id === "string" &&
    typeof obj.name === "string" &&
    typeof obj.email === "string"
  )
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// ✅ 联合类型的处理
const handleUserStatus = (status: UserStatus) => {
  switch (status) {
    case "active":
      return "用户活跃"
    case "inactive":
      return "用户非活跃"
    case "banned":
      return "用户已封禁"
    default:
      // TypeScript 会检查是否覆盖了所有情况
      const exhaustiveCheck: never = status
      throw new Error(`未处理的状态: ${exhaustiveCheck}`)
  }
}
```

### 4. React 组件的 TypeScript 最佳实践

```typescript
// ✅ 函数组件的类型定义
interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
  disabled = false
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

// ✅ Hooks 的类型定义
const useApi = <T>(url: string): {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
} => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result: T = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : '未知错误');
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

// ✅ 事件处理器的类型
const FormComponent = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // 处理表单提交
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // 处理输入变化
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    // 处理选择变化
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <select onChange={handleSelectChange}>
        <option value="option1">选项1</option>
      </select>
    </form>
  );
};
```

## 样式规范

### 1. Tailwind CSS 最佳实践

```typescript
// ✅ 使用工具函数组合样式
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        // 基础样式
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",

        // 变体样式
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-200 text-gray-900 hover:bg-gray-300": variant === "secondary",
          "border border-gray-300 bg-transparent hover:bg-gray-50": variant === "outline",
        },

        // 尺寸样式
        {
          "h-8 px-3 text-sm": size === "sm",
          "h-10 px-4 text-base": size === "md",
          "h-12 px-6 text-lg": size === "lg",
        },

        className
      )}
      {...props}
    />
  );
};
```

### 2. 响应式设计约定

```typescript
// ✅ 响应式组件
const ResponsiveGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
      "grid grid-cols-1 gap-4",      // 移动端：单列
      "md:grid-cols-2 md:gap-6",     // 平板：双列
      "lg:grid-cols-3 lg:gap-8",     // 桌面：三列
      "xl:grid-cols-4"               // 大屏：四列
    )}>
      {children}
    </div>
  );
};
```

## 代码质量规范

### 1. 错误处理

```typescript
// ✅ 完善的错误处理
const createUser = async (userData: CreateUserRequest): Promise<User> => {
  try {
    const response = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData)
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || "创建用户失败")
    }

    return await response.json()
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error("网络错误，请稍后重试")
  }
}
```

## 性能最佳实践

### 1. 组件优化

```typescript
// ✅ 使用 React.memo 优化组件
const UserCard = React.memo<UserCardProps>(({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <Button onClick={onEdit}>编辑</Button>
    </div>
  );
});

// ✅ 使用 useCallback 优化函数
const UserList = ({ users }: { users: User[] }) => {
  const handleUserEdit = useCallback((userId: string) => {
    // 处理编辑逻辑
  }, []);

  return (
    <div>
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={() => handleUserEdit(user.id)}
        />
      ))}
    </div>
  );
};
```

## SEO 最佳实践

### 1. 元数据配置

```typescript
// app/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js Boilerplate",
    default: "Next.js Boilerplate - 现代化开发模板"
  },
  description: "基于 Next.js 15、React 19、TypeScript 的现代化开发模板",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "wangkaifn" }]
}
```

## 开发工具配置

### 1. VSCode 配置

#### `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

## 最佳实践检查清单

### ✅ 新建页面时检查

- [ ] 是否使用了正确的文件命名约定 (kebab-case)
- [ ] 是否添加了 `loading.tsx` 和 `error.tsx`
- [ ] 是否正确设置了元数据 (Metadata)
- [ ] 是否考虑了 SEO 优化
- [ ] 是否添加了适当的类型注解

### ✅ 新建组件时检查

- [ ] 是否定义了清晰的 Props 接口
- [ ] 是否添加了适当的 TypeScript 类型注解
- [ ] 是否考虑了组件的可复用性
- [ ] 是否添加了 `className` 属性支持自定义样式
- [ ] 是否使用了 `React.memo` 进行性能优化（如需要）
- [ ] 是否添加了单元测试

### ✅ 代码提交前检查

- [ ] ESLint 检查通过 (`pnpm run lint`)
- [ ] TypeScript 编译无错误 (`pnpm run type-check`)
- [ ] Prettier 格式化完成 (`pnpm run format`)
- [ ] 所有测试通过
- [ ] 提交信息符合 Conventional Commits 规范

### ✅ 性能优化检查

- [ ] 是否使用了 Next.js Image 组件优化图片
- [ ] 是否避免了不必要的重新渲染
- [ ] 是否使用了适当的缓存策略
- [ ] 是否进行了代码分割（动态导入）
- [ ] 是否优化了包体积大小

---

## 总结

通过遵循本指南中的规范和最佳实践，您可以：

- ✅ **保持代码一致性** - 统一的命名约定和代码风格
- ✅ **提高开发效率** - 清晰的项目结构和组件组织方式
- ✅ **确保代码质量** - TypeScript 类型安全和 ESLint 规则
- ✅ **优化用户体验** - 性能优化和 SEO 最佳实践
- ✅ **便于团队协作** - 标准化的开发流程和工具配置

这套开发规范适用于个人项目和团队协作，确保项目的可维护性和可扩展性。根据实际需求，您可以在此基础上进行调整和扩展。
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
"disabled:pointer-events-none disabled:opacity-50",

        // 变体样式
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500":
            variant === "primary",
          "bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-500":
            variant === "secondary",
          "border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-500":
            variant === "outline",
        },

        // 尺寸样式
        {
          "h-8 px-3 text-sm": size === "sm",
          "h-10 px-4 text-base": size === "md",
          "h-12 px-6 text-lg": size === "lg",
        },

        // 自定义样式
        className
      )}
      {...props}
    />

);
};

````

### 2. 样式组织结构

```css
/* styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 全局样式重置 */
@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings:
      "rlig" 1,
      "calt" 1;
  }

  * {
    @apply border-border;
  }
}

/* 组件样式 */
@layer components {
  .btn {
    @apply inline-flex items-center justify-center rounded-md font-medium transition-colors;
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2;
    @apply disabled:pointer-events-none disabled:opacity-50;
  }

  .card {
    @apply rounded-lg border bg-card text-card-foreground shadow-sm;
  }

  .input {
    @apply flex h-10 w-full rounded-md border border-input bg-background px-3 py-2;
    @apply text-sm ring-offset-background;
    @apply file:border-0 file:bg-transparent file:text-sm file:font-medium;
    @apply placeholder:text-muted-foreground;
    @apply focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2;
    @apply disabled:cursor-not-allowed disabled:opacity-50;
  }
}

/* 工具样式 */
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  .text-balance {
    text-wrap: balance;
  }
}
````

### 3. 响应式设计约定

```typescript
// ✅ 响应式组件
const ResponsiveGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
      // 移动端：单列
      "grid grid-cols-1 gap-4",
      // 平板：双列
      "md:grid-cols-2 md:gap-6",
      // 桌面：三列
      "lg:grid-cols-3 lg:gap-8",
      // 大屏：四列
      "xl:grid-cols-4"
    )}>
      {children}
    </div>
  );
};

// ✅ 响应式文字大小
const ResponsiveTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className={cn(
      "font-bold leading-tight tracking-tight",
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
    )}>
      {children}
    </h1>
  );
};

// ✅ 响应式间距
const ResponsiveSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={cn(
      "px-4 py-8",           // 移动端
      "sm:px-6 sm:py-12",    // 小屏幕
      "md:px-8 md:py-16",    // 中等屏幕
      "lg:px-12 lg:py-20",   // 大屏幕
      "xl:px-16 xl:py-24"    // 超大屏幕
    )}>
      {children}
    </section>
  );
};
```

### 4. 深色模式支持

```typescript
// ✅ 支持深色模式的组件
const ThemeAwareCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(
      "rounded-lg border p-6",
      // 浅色模式
      "bg-white border-gray-200 text-gray-900",
      // 深色模式
      "dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
    )}>
      {children}
    </div>
  );
};

// tailwind.config.js 配置深色模式
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        // ... 更多颜色变量
      },
    },
  },
  plugins: [],
};
```

---

_文档将继续添加文件组织规范、代码质量规范、性能最佳实践等内容..._
