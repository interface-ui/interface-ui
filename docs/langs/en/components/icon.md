---
title: Icons
lang: en
---

<script setup lang="ts">
  import iconProps from "../../../example/icon/description/en-icon-props.ts";
  import svgIconProps from "../../../example/icon/description/en-svgicon-props.ts";
</script>

# Icons

Fusion UI Icons follows [Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons) guidance to build the icon system.

Fusion UI provides two way to build the icon:
1. With [Fusion UI Iconify](https://www.npmjs.com/package/fusion-ui-iconify) library as Vue component (SVG Icons)
2. With the [SvgIcon](#svgicon) component, a Vue wrapper for custom SVG icons.

## Fusion UI Iconify

[Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons) are available in five styles. The icons are based on the core Material Design principles and metrics.

We transfer all these icons into the separate components (2.1k+ for each style, total in 1w+ icons)

### Installation

```shell
npm install fusion-ui-iconify
```

### Usage

If you are not using this library with `Fusion UI`, then you should import the style file.

Otherwise, you don't need to do more configuration. The components in `Fusion UI` already complete the adaptation for it.

```js
// main.js
import 'fusion-ui-iconify/dist/style.css'
```

Import icons using the following way (❗️Needs to be optimized)
```js
import { DeleteFilled, SaveFilled } from 'fusion-ui-iconify'
```

Each Material icon also has a "style": Filled, Outlined, Rounded, Two-tone, and Sharp. To import the icon component with a theme other than the default, append the style name to the icon name.

- Filled style is exported as `fusion-ui-iconify/dist/component/material-icons/DeleteFilled`,
- Outlined style is exported as `fusion-ui-iconify/dist/component/material-icons/DeleteOutlined`,
- Rounded style is exported as `fusion-ui-iconify/dist/component/material-icons/DeleteRounded`,
- Twotone style is exported as `fusion-ui-iconify/dist/component/material-icons/DeleteTwoTone`,
- Sharp style is exported as `fusion-ui-iconify/dist/component/material-icons/DeleteSharp`.

<demo src="../../../example/icon/basic.vue"></demo>

## SvgIcon

If you need a custom SVG icon (not available in the Material Icons) you can use the SvgIcon wrapper. This component extends the native `<svg> ` element:

It comes with built-in accessibility.

SVG elements should be scaled for a `24 x 24 px` viewport so that the resulting icon can be used as is, or included as a child for other Material UI components that use icons.

By default, the component **inherits** the current color and font size. Optionally, you can apply one of the theme colors using the `color` prop and `size` prop to change it.

It supports `<svg>` element as a child so you can copy and paste your SVG directly to SvgIcon component.

<demo src="../../../example/icon/svgicon.vue"></demo>

### Color

The `color` prop of Icons in [Fusion UI Iconify](https://www.npmjs.com/package/fusion-ui-iconify) do not support `ThemeSchemes` and `ThemeCallback` since it was built without any dependencies.

BUT❗️❗️❗️ You can use the `component` prop of `SvgIcon` to enable this feature.

<demo src="../../../example/icon/color.vue"></demo>

### Size

The `size` prop accept both the String and Number.

<demo src="../../../example/icon/size.vue"></demo>

## Attributes

### Fusion UI Iconify

<table-block type="propsEn" :data="iconProps"></table-block>

### SvgIcon

<table-block type="propsEn" :data="svgIconProps"></table-block>
