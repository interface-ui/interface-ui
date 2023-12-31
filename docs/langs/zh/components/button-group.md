---
title: 按钮组
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/button-group/description/zh-props.ts";
  import slots from "../../../example/button-group/description/zh-slots.ts";
</script>

# 按钮组

按钮组件可用于分组按钮。

## 用法

### 基本按钮组

`<ButtonGroup />` 可以将 [`<Button />`](./button.md) 组件分组为其直接子组件并控制它们的样式。
<demo col src ="../../../example/button-group/basic.vue" preview="[2-11]"/>

### 变体

支持所有标准[按钮变体](./button.md)。
<demo src="../../../example/button-group/variant.vue" />

### 形状

还支持所有标准[按钮形状]('./button.md#形状')。
<demo col src="../../../example/button-group/shape.vue" Preview="[2-6, 12-16]" />

### 方向

`<ButtonGroup />` 支持水平（默认）和垂直
<demo src="../../../example/button-group/orientation.vue" Preview="[2-6]" />

### 尺寸和颜色

`size` 和 `color` 属性可用于控制按钮组的外观。
<demo col src="../../../example/button-group/size-color.vue" Preview="[2-6]" />

### 按钮的特定属性

您可以在特定按钮上设置道具。
<demo col src="../../../example/button-group/specific.vue" Preview="[8-13]" />

### 分割按钮

`<ButtonGroup />` 也可用于创建拆分按钮。 该功能可以与[`<Menu />`](./menu.md)或其他组件配合来实现一些强大的功能。
<demo col src="../../../example/button-group/split.vue" />


## 属性

<table-block type="propsZh" :data="props" />


## 插槽

<table-block type="slotsZh" :data="slots" />
