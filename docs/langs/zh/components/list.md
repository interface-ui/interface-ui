---
title: List 列表
lang: zh
---

# List 列表

列表是文本和图像的连续垂直索引

## 基础用法

<demo src="../../../example/list/basic.vue" />

## 嵌套列表

借助 `Collapse` 组件，我们可以构建嵌套列表。

使用 `List` 上的 `level` 属性来控制嵌套列表项的缩进。或者您可以在 `ListItem` 上使用 `indent` 来控制特定的项。

<demo src="../../../example/list/nested.vue" preview="[72-86]" />

## 缩进

使用 `indent` 属性可以使没有前导图标或头像的列表项与具有正确对齐的项对齐。

<demo src="../../../example/list/indent.vue" />

## 文本和不可选择的列表

将 `selectable=false` 设置为使项目不可选择。此外，您还可以为特定的 `ListItem` 进行设置。

`ListItemText` 组件可用于显示标题和支持文本。

<demo src="../../../example/list/text-unselectable.vue" />

当显示三行或更多时，头像不会与顶部对齐。您应该设置 `alignItems="flex-start"` 属性以使头像与顶部对齐，遵循 Material Design 指南。

## 高亮

在特定项上设置 `highlight=true` 以使其具有背景颜色。

`highlight-color` 属性（默认为 `secondaryContainer`）可用于自定义高亮背景颜色。

将其设置在 `List` 上以应用于所有项，或者在 `ListItem` 上以控制特定项。

<demo src="../../../example/list/highlight.vue" preview="[22-28]" />

## 列表控件

列表可以非常灵活地实现列表控件。

<demo src="../../../example/list/list-controls.vue" />
