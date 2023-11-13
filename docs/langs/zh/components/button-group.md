---
title: 按钮组
lang: zh
---

<!-- <script setup lang="ts">
  import props from "../../../example/button/description/en-props.ts";
  import slots from "../../../example/button/description/en-slots.ts";
</script> -->

# 按钮组

按钮组件可用于分组按钮。

## 用法

### 基本按钮

`Button` 组件可以由 `ButtonGroup` 作为其直接子元素进行分组。

您可以通过 `ButtonGroup` 设置所有按钮属性，而不是逐个设置 `Button`。

<demo src="../../../example/button-group/basic.vue" />

### 变种

支持所有标准按钮变种。

<demo src="../../../example/button-group/variant.vue" />

### 方向

`ButtonGroup` 支持水平（默认）和垂直排列

<demo src="../../../example/button-group/orientation.vue" />

### 大小和颜色

`size` 和 `color` 属性可用于控制按钮组的外观。

<demo src="../../../example/button-group/size-color.vue" />
