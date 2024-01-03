---
title: Typography
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/typography/description/zh-props.ts";
</script>

# Typography 排版

排版有助于使文字更加清晰和美观

## Roboto 字体

Interface UI 默认使用 [Roboto](https://fonts.google.com/specimen/Roboto) 字体。欲了解更多信息，请查看 [@fontsource/roboto](https://www.npmjs.com/package/@fontsource/roboto)

> Interface UI 的默认排版配置仅依赖于 300、400、500 和 700 字体粗细。

## 排版尺度

`Typography` 组件遵循 [Material Design Typography Scale](https://m3.material.io/styles/typography/type-scale-tokens) 指南，以构建到 `html` 的映射。请查看以下映射关系。

| Material Design Typography Type Scale | Interface UI HTML Tag |
|:--------------------------------------|:-------------------|
| Display Large                         | `h1`               |
| Display Medium                        | `h2`               |
| Display Small                         | `h3`               |
| HeadLine Large                        | `h4`               |
| HeadLine Medium                       | `h5`               |
| HeadLine Small                        | `h6`               |
| Title Small/Medium/Large              | `h6`               |
| Body Small/Medium/Large               | `p`                |
| Label Small/Medium/Large              | `span`             |

## 使用方法

<demo src="../../../example/typography/basic.vue" />

## 自定义

通过设置 `component` 属性，您可以控制在 HTML 中呈现哪个 `Tag`。

使用 `variant` 来样式化组件。`body.large` 作为默认变体。

<demo src="../../../example/typography/customization.vue" />

## 辅助功能

遵循可访问排版的关键因素：

* **颜色**: `Typography` 的默认颜色为 `onSurface`。
* **字体大小**: 使用 `rem` 而不是 `px`。

## 属性

<data-table type="props" lang="zh" :data="props" />
