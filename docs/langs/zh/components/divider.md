---
title: Divider 分割线
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/divider/description/zh-props.ts";
</script>

# Divider 分割线

分割线是用于在列表或其他容器中分组内容的细线。


## 用法

### 基本分割线

分割线默认呈现为 `<hr>` 元素。

<demo src="../../../example/divider/basic.vue" preview="[2]" />

使用 `component` 属性可以将其渲染为其他元素（例如，在列表中呈现为 `<li>`）。
<demo src="../../../example/divider/list.vue" preview="[7]" />

### 全宽分割线

使用全宽分割线来分隔不相关内容的较大部分。它们可以直接用于表面或嵌套在卡片或列表等其他组件中。

全宽分割线还可以将交互区域与非交互区域分隔开。

它们用于将视觉元素分组在一起，并指示元素在交互角度上彼此相关。
<demo src="../../../example/divider/full-width.vue" preview="[10]" />

### 缩进分割线

使用缩进分割线来分隔同一部分中的相关内容。

缩进分割线默认情况下从屏幕两侧等距缩进。
<demo src="../../../example/divider/inset.vue" preview="[25]" />

### 分割线文本

当方向为水平时，您可以向分割线添加内容。

<demo src="../../../example/divider/text.vue" preview="[8, 14, 20]" />

### 方向

默认方向为水平，将 `orientation=vertical` 设置为使用垂直分割线。
<demo src="../../../example/divider/orientation.vue" />


## 属性

<data-table type="props" lang="zh" :data="props" />
