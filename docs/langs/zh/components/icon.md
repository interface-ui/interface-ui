---
title: Icon 图标
lang: zh
---

<script setup lang="ts">
  import iconProps from "../../../example/icon/description/zh-icon-props.ts";
  import svgIconProps from "../../../example/icon/description/zh-svgicon-props.ts";
</script>

# Icon 图标

Fusion UI 图标遵循[Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons)指南构建图标系统。

Fusion UI 提供两种构建图标的方式：
1. 使用[Fusion UI Iconify](https://www.npmjs.com/package/fusion-ui-iconify)库作为Vue组件（SVG图标）
2. 使用[SvgIcon](#svgicon)组件，这是自定义SVG图标的Vue组件包装器。

## Fusion UI Iconify

[Material Symbols and Icons](https://fonts.google.com/icons?icon.set=Material+Icons)有五种样式可用。这些图标基于核心Material Design原则和度量标准。

我们将所有这些图标转化为单独的组件（每种样式有2.1k+个，总共有1w+个图标）

### 安装

```shell
npm install fusion-ui-iconify
```

### 使用

如果您未与 `Fusion UI` 一起使用此库，则应导入样式文件。

否则，您无需进行更多配置。`Fusion UI` 中的组件已经完成了对其的适配。

```js
// main.js
import 'fusion-ui-iconify/dist/style.css'
```

使用以下方式导入图标
```js
import { DeleteFilled, SaveFilled } from 'fusion-ui-iconify'
```

每个Material图标还具有“style”：Filled，Outlined，Rounded，Two-tone和Sharp。要导入带有默认主题以外的主题的图标组件，请在图标名称后附加样式名称。

- Filled样式导出为`fusion-ui-iconify/dist/component/material-icons/DeleteFilled`,
- Outlined样式导出为`fusion-ui-iconify/dist/component/material-icons/DeleteOutlined`,
- Rounded样式导出为`fusion-ui-iconify/dist/component/material-icons/DeleteRounded`,
- Twotone样式导出为`fusion-ui-iconify/dist/component/material-icons/DeleteTwoTone`,
- Sharp样式导出为`fusion-ui-iconify/dist/component/material-icons/DeleteSharp`。

<demo src="../../../example/icon/basic.vue" />

## SvgIcon

如果您需要自定义SVG图标（Material Icons中不可用），可以使用SvgIcon包装器。此组件扩展了本机的`<svg>`元素：

它带有内置的可访问性。

SVG元素应缩放为 `24 x 24像素` 的视口，以便生成的图标可以直接使用。

默认情况下，该组件**继承**当前颜色和字体大小。可选地，您可以使用`color`属性和`size`属性来更改其中一个主题颜色。

它支持 `<svg>` 元素作为子元素，因此您可以将您的SVG直接复制粘贴到SvgIcon组件中。

<demo src="../../../example/icon/svgicon.vue" />

### 颜色

[Fusion UI Iconify](https://www.npmjs.com/package/fusion-ui-iconify)中的图标的 `color` 属性不支持 `ThemeSchemes` 和 `ThemeCallback`，因为它是没有任何依赖项构建的。

但是❗️❗️❗️您可以使用 `SvgIcon` 的 `component` 属性来启用此功能。

<demo src="../../../example/icon/color.vue" />

### 大小

`size` 属性接受字符串和数字两种格式。

<demo src="../../../example/icon/size.vue" />

## 属性

### Fusion UI Iconify

<table-block type="propsZh" :data="iconProps" />

### SvgIcon

<table-block type="propsZh" :data="svgIconProps" />
