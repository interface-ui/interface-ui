---
title: Icons
lang: en
---

<script setup lang="ts">
  import svgIconProps from "../../../example/icon/description/en-svgicon-props.ts";
</script>

# Icons

Interface UI Icons follow [Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons) guidance to build the icon system.

Interface UI provides three ways to build the icon:
1. With [@interface-ui/icons](https://www.npmjs.com/package/@interface-ui/icons) library as a Vue component (SVG Icons)
2. With the [SvgIcon](#svgicon) component, a Vue wrapper for custom SVG icons.
3. Use the other icon library.


## @interface-ui/icons

[Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons) are available in five styles. The icons are based on the core Material Design principles and metrics.

We transfer all these icons into separate components (2.1k+ for each style, total in 1w+ icons)

All icons can be found [here](https://interface-ui.github.io/interface-ui-icons/).

### Installation

::: code-group
```shell [npm]
npm i @interface-ui/icons
```

```shell [yarn]
yarn add @interface-ui/icons
```

```shell [pnpm]
pnpm add @interface-ui/icons
```
:::

### Usage

There are two ways to import icons:

* Option 1:
  ```js
  import { DeleteFilled, SaveFilled } from '@interface-ui/icons'
  ```
* Option 2:
  ```js
  import DeleteFilled from '@interface-ui/icons/DeleteFilled'
  import SaveFilled from '@interface-ui/icons/SaveFilled'
  ```

::: warning
**Option 1** is not friendly to the bundle size.

We recommend using the **second option**.

Make sure you follow the **minimizing bundle size** guide before using the second approach.
:::

Each Material icon has a "style": Filled, Outlined, Rounded, Two-tone, and Sharp. To import the icon component with a theme, append the style name to the icon name.

- Filled style is exported as `@interface-ui/icons/DeleteFilled`,
- Outlined style is exported as `@interface-ui/icons/DeleteOutlined`,
- Rounded style is exported as `@interface-ui/icons/DeleteRounded`,
- Sharp style is exported as `@interface-ui/icons/DeleteSharp`,
- Twotone style is exported as `@interface-ui/icons/DeleteTwoTone`.

<demo src="../../../example/icon/basic.vue" />

## SvgIcon

If you need a custom SVG icon (not available in the Material Icons), you can use the SvgIcon wrapper. This component extends the native `<svg> ` element:

It comes with built-in accessibility.

SVG elements should be scaled for a `24 x 24 px` viewport so that the resulting icon can be used as is.

By default, the component **inherits** the current color and font size. Optionally, you can apply one of the theme colors using the `color` prop and `size` prop to change it.

It supports `<svg>` element as a child, so you can copy and paste your SVG directly to the `<SvgIcon />` component.
<demo src="../../../example/icon/svgicon.vue"/>

### Color
The [@interface-ui/icons](https://www.npmjs.com/package/@interface-ui/icons) do not support `ThemeSchemes` and `ThemeCallback` since they were built without dependencies.

BUT❗️❗️❗️ You can use the `component` prop of `<SvgIcon />` to enable this feature.
<demo src="../../../example/icon/color.vue" preview="[6-9]" />

### Size

Use the `font-size` on the icon directly to change the size.
<demo src="../../../example/icon/size.vue" preview="[6-9]" />


## SvgIcon Attributes

<table-block type="propsEn" :data="svgIconProps" />

