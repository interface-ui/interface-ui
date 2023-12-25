---
title: Typography
lang: en-US
---

<script setup lang="ts">
  import props from "../../../example/typography/description/en-props.ts";
</script>

# Typography

Typography helps make writing legible and beautiful

## Roboto font

Interface UI uses the [Roboto](https://fonts.google.com/specimen/Roboto) by default. For more information, see [@fontsource/roboto](https://www.npmjs.com/package/@fontsource/roboto)

> Interface UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.

## Typography Scale

The `Typography` component follows the [Material Design Typography Scale](https://m3.material.io/styles/typography/type-scale-tokens) instructions to build a mapping to `html`. Check the mapping relationships below.

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

## Usage

<demo src="../../../example/typography/basic.vue" />

## Customization

By setting `component` prop, you can control which `Tag` be rendered in the HTML.

Using `variant` to style the component. The `body.large` is used as defalut variant.

<demo src="../../../example/typography/customization.vue" />

## Accessibility

Key factors to follow for an accessible typography:

* **Color**: The default color for `Typography` is `onSurface`.
* **Font Size**: Use `rem` instead of pixels.

## Attributes

<table-block type="propsEn" :data="props" />
