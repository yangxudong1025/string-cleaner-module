# String Cleaner Module

## 简介

这是一个字符串清洗模块，支持多个预设模式，包括：
- **slug**: 清除HTML标签和Emoji表情
- **compact**: 清除HTML标签
- **cleanAll**: 清除HTML标签和Emoji表情

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
