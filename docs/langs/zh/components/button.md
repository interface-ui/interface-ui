---
title: Button
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/button/description/zh-props.ts";
  import slots from "../../../example/button/description/zh-slots.ts";
</script>

# Button 按钮

常见的操作按钮。

## 用法

### 基础按钮

Button 有五种变体：elevated, filled（默认）, tonal, outlined, and text
<demo src="../../../example/button/basic.vue" preview="[6-10]" />

### 凸起按钮

凸起按钮本质上是带阴影的填充色调按钮。为了防止阴影蔓延，只在绝对必要时使用它们，例如当按钮需要从图案背景中视觉上分离时。
<demo src="../../../example/button/elevated.vue" preview="[2, 3]" />

### 填充按钮

填充按钮在 [`<Fab />`](./fba.md) 之后具有最大的视觉冲击力，应用于完成流程所需的必要最终操作，如保存、现在加入或确认。
<demo src="../../../example/button/filled.vue" preview="[2, 3]" />

### 填充色调按钮

填充色调按钮是填充和轮廓按钮之间的另一种中间选择。在需要比轮廓更多强调的低优先级按钮上很有用，例如在引导流程中的“下一步”。色调按钮使用次要颜色映射。
<demo src="../../../example/button/tonal.vue" preview="[2, 3]" />

### 轮廓按钮

轮廓按钮是中等强调按钮。它们包含必要的操作，但不是应用中的主要操作。
<demo src="../../../example/button/outlined.vue" preview="[2, 3]" />

### 文本按钮

文本按钮用于最低优先级的操作，尤其是在提供多个选项时。
<demo src="../../../example/button/text.vue" preview="[2, 3]" />

### 尺寸

按钮按从小到大的大小堆叠；使用 `size` 属性来改变大小。
<demo src="../../../example/button/sizes.vue" />

### 颜色

按钮的 `color` 属性允许您自定义组件的颜色。
<demo src="../../../example/button/color.vue" preview="[2-5]" />

### 形状

这有三种可用的形状：arc（默认）、rounded 和 square
<demo src="../../../example/button/shapes.vue" preview="[2-4]" />

### 结合图标使用

带图标和标签的按钮
<demo src="../../../example/button/icon.vue" preview="[7, 8]" />

## 属性

<table-block type="propsZh" :data="props" />


## 插槽

<table-block type="slotsZh" :data="slots" />
