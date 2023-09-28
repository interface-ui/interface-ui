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

### 基本按钮

`Button` 有三种变体：文本、填充（默认）和轮廓。

<demo src="../../../example/button/basic.vue"></demo>

### 文本按钮

文本按钮用于最低优先级的操作，尤其在呈现多个选项时使用。

<demo src="../../../example/button/text.vue"></demo>

### 填充按钮

填充按钮在浮动操作按钮之后具有最大的视觉影响，应该用于重要的、最终完成流程的操作，例如保存、立即加入或确认。

使用 `disable-elevation` 属性来移除高程。

<demo src="../../../example/button/no-elevation.vue"></demo>

### 轮廓按钮

轮廓按钮是中等重点的按钮。它们包含重要但不是应用程序中的主要操作的动作。

<demo src="../../../example/button/outlined.vue"></demo>

### 尺寸

按钮堆叠的大小从小到大，使用 `size` 属性来更改大小。

<demo src="../../../example/button/sizes.vue"></demo>

### 颜色

`color` 属性允许您自定义组件的颜色。

<demo src="../../../example/button/color.vue"></demo>

### 形状

有三种形状可供使用：圆角（默认）、方形和完全圆角。

<demo src="../../../example/button/shapes.vue"></demo>

### 使用图标

带有图标和标签的按钮。

<demo src="../../../example/button/icon.vue"></demo>

## 属性

<table-block type="propsZh" :data="props"></table-block>

## 插槽

<table-block type="slotsZh" :data="slots"></table-block>
