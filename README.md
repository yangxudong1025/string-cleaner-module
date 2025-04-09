# String Cleaner Module

## 简介

这是一个字符串清洗模块，支持多个预设模式，包括：
- **slug**: 清除HTML标签和Emoji表情
- **compact**: 清除HTML标签
- **cleanAll**: 清除HTML标签和Emoji表情

## 升级
```
•	src/core：通用纯函数逻辑（适用于 Node/React/Vue）
•	src/vue：提供 Vue composable（useStringCleaner）
•	src/nuxt：Nuxt 模块封装（自动引入 plugin 和 composable）
•	playground/nuxt：可直接运行的 Nuxt Playground（演示效果）
•	test/：Vitest 单元测试
•	README.md：中英文文档（可继续扩展）
•	打包支持：tsup 构建支持 ESM/CJS、支持 tree-shaking
```

## 用法示例

### 在 Nuxt 组件中使用

```ts
const { clean, presets } = useStringCleaner()

const result = clean('<b>Hello 👋</b>', presets.slug)
```

### 在插件中使用

```ts
const { $cleanString } = useNuxtApp()

const sanitized = $cleanString('<b>Hello 👋</b>', { removeHtmlTags: true, removeEmoji: true })
```

## Installation

```bash
npm install string-cleaner-module
```
