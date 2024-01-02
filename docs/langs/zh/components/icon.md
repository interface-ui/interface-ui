---
title: Icon 图标
lang: zh
---

<script setup lang="ts">
  import iconProps from "../../../example/icon/description/zh-icon-props.ts";
  import svgIconProps from "../../../example/icon/description/zh-svgicon-props.ts";
</script>

# Icon 图标

Interface UI 图标遵循[Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons)指南构建图标系统。

Interface UI 提供三种构建图标的方式：
1. 使用[@interface-ui/icons](https://www.npmjs.com/package/@interface-ui/icons)库作为Vue组件（SVG图标）
2. 使用[SvgIcon](#svgicon)组件，这是自定义SVG图标的Vue组件包装器。
3. 使用其他的图标库

## Interface UI Iconify

[Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons)有五种样式可用。这些图标基于核心Material Design原则和度量标准。

我们将所有这些图标转化为单独的组件（每种样式有2.1k+个，总共有1w+个图标）

[这里](https://interface-ui.github.io/interface-ui-icons/)能找到我们提供的所有图标。


### 安装

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

### 使用

我们提供以下两种方式来导入图标：

* 方法1:
  ```js
  import { DeleteFilled, SaveFilled } from '@interface-ui/icons'
  ```
* 方法2:
  ```js
  import DeleteFilled from '@interface-ui/icons/DeleteFilled'
  import SaveFilled from '@interface-ui/icons/SaveFilled'
  ```

::: warning
**选项 1** 对捆绑包大小不友好。

我们建议使用**第二个选项**。

在使用第二种方法之前，请确保遵循**最小化捆绑包大小**指南。
:::

每个Material图标还具有“style”：Filled，Outlined，Rounded，Two-tone和Sharp。要导入图标组件，请在图标名称后附加样式名称。

- Filled样式导出为 `@interface-ui/icons/DeleteFilled`,
- Outlined样式导出为 `@interface-ui/icons/DeleteOutlined`,
- Rounded样式导出为 `@interface-ui/icons/DeleteRounded`,
- Sharp样式导出为 `@interface-ui/icons/DeleteSharp`,
- Twotone样式导出为 `@interface-ui/icons/DeleteTwoTone`。

<demo src="../../../example/icon/basic.vue" />

## SvgIcon

如果您需要自定义SVG图标（Material Icons中不可用），可以使用SvgIcon包装器。此组件扩展了本机的`<svg>`元素：

它带有内置的可访问性。

SVG元素应缩放为 `24 x 24像素` 的视口，以便生成的图标可以直接使用。

默认情况下，该组件**继承**当前颜色和字体大小。可选地，您可以使用`color`属性和`size`属性来更改其中一个主题颜色。

它支持 `<svg>` 元素作为子元素，因此您可以将您的SVG直接复制粘贴到 `<SvgIcon />` 组件中。
<demo src="../../../example/icon/svgicon.vue" />

### 颜色

[@interface-ui/icons](https://www.npmjs.com/package/@interface-ui/icons)中的图标不支持 `ThemeSchemes` 和 `ThemeCallback`，因为它是没有任何依赖项构建的。

但是❗️❗️❗️您可以使用 `<SvgIcon />` 的 `component` 属性来启用此功能。
<demo src="../../../example/icon/color.vue" preview="[6-9]" />

### 大小

直接使用图标上的 `font-size` 来更改大小。
<demo src="../../../example/icon/size.vue" preview="[6-9]" />


## SvgIcon 属性

<table-block type="propsZh" :data="svgIconProps" />
