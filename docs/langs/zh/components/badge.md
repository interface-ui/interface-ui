---
title: Badge 徽章
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/badge/description/en-props.ts";
</script>


# Badge 徽章

按钮和图标上的数字或状态标记。

## 基本用法

`value` 用于显示新消息的数量

<demo src="../../../example/badge/basic.vue" />


## 最大值

自定义最大值由 `max` 属性定义，并接受数字值。

<demo src="../../../example/badge/max.vue" />

## 颜色

使用 `color` 属性自定义徽章。

<demo src="../../../example/badge/color.vue" />

## 对齐

您可以使用 `xAlign` 和 `yAlign` 属性将徽章移动到包装元素的任何角落。

<demo src="../../../example/badge/align.vue" />


## 自定义

借助 `styled` 函数，`Badge` 变得更加灵活。

<demo src="../../../example/badge/custom.vue" />

## 属性

<table-block type="propsZh" :data="props" />
