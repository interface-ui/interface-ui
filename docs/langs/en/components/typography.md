---
title: Typography
lang: en-US
---

# Typography

Typography helps make writing legible and beautiful

## Roboto font

Fusion UI uses the [Roboto](https://fonts.google.com/specimen/Roboto) by default. For more information, see [@fontsource/roboto](https://www.npmjs.com/package/@fontsource/roboto)

> Fusion UI's default typography configuration relies only on the 300, 400, 500, and 700 font weights.

## Typography Scale

The `Typography` component follows the [Material Design Typography Scale](https://m3.material.io/styles/typography/type-scale-tokens) instructions to build a mapping to `html`. Check the mapping relationships below.

| Material Design Typography Type Scale | Fusion UI HTML Tag |
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

<demo src="../../../example/typography/basic.vue"></demo>

## Customization

By setting `component` prop, you can control which `Tag` be rendered in the HTML.

Using `variant` to style the component. The `body.large` is used as defalut variant.

<demo src="../../../example/typography/customization.vue"></demo>

## Accessibility

Key factors to follow for an accessible typography:

* **Color**: The default color for `Typography` is `onSurface`.
* **Font Size**: Use `rem` instead of pixels.
