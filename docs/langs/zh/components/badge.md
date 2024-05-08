---
title: Badge 徽章
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/badge/description/en-props.ts";
</script>


# Badge 徽章

按钮和图标上的数字或状态标记。


## 用法

### 基本徽章

使用 `content` 属性来传递数据。

徽章有两种变体：dot 和 content（默认）。 当 `variant=dot` 时， `content` 属性将被忽略。
<demo src="../../../example/badge/basic.vue" preview="[9-11]" />

### 最大值

自定义最大值由 `max` 属性定义，并接受数字和字符串。
<demo src="../../../example/badge/max.vue" preview="[7-11]" />

### 颜色

使用 `color` 属性自定义徽章。
<demo src="../../../example/badge/color.vue" preview="[12-14]" />

### 对齐

您可以使用 `x-align` 和 `y-align` 属性将徽章移动到包装元素的任何角落。
<demo src="../../../example/badge/align.vue" />

### 自定义

借助 `styled` 函数，`<Badge />` 变得更加灵活。
<demo src="../../../example/badge/custom.vue" preview="[45-50]" />


## 属性

<data-table type="props" lang="zh" :data="props" />
