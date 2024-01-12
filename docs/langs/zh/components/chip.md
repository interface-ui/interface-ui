---
title: Chip
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/chip/description/zh-props.ts";
</script>

# Chip 标签

`<Chip />` 可以帮助人们输入信息、进行选择、过滤内容或触发操作


## 用法

### 基本标签

`<Chip />` 支持两种变体：`filled` 和 `outlined`。
<demo src="../../../example/chip/basic.vue" preview="[2-5]" />

### 可点击

通过设置 `clickable=true` 使 `<Chip />` 可点击。

这将在内部使用 `<ActionArea />` 组件，使用 `component` 属性来渲染其他标签。
<demo src="../../../example/chip/clickable.vue" preview="[2, 3]" />

### 颜色

`color` 属性可以为 `<Chip />` 添加不同的颜色。
<demo src="../../../example/chip/color.vue" />

### 图标

您可以直接向默认插槽添加图标。为 icon 添加 `leading` 或 `trailing` 属性有助于优化样式。
<demo src="../../../example/chip/icon.vue" preview="[6-13]" />

### 可删除

当属性 `deletable=true` 时，`芯片` 将显示一个关闭图标，并在点击时触发 `close` 方法。
<demo src="../../../example/chip/deletable.vue" />


## 属性

<data-table type="props" lang="zh" :data="props" />
