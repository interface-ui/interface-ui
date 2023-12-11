---
title: Chip
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/chip/description/zh-props.ts";
</script>

# Chip 标签

`Chip` 可以帮助人们输入信息、进行选择、过滤内容或触发操作

## 基础用法

`Chip` 支持 `填充` 和 `轮廓` 两种类型。

<demo src="../../../example/chip/base.vue" preview="[2, 3]" />

## 可点击

为 `Chip` 添加 `clickable` 属性，使其可点击。
<demo src="../../../example/chip/clickable.vue"  preview="[2, 3]" />

## 禁用

禁用状态的 `Chip` 无法点击。
<demo src="../../../example/chip/disabled.vue"  preview="[2-5]" />

## 颜色

属性 `color` 可以为 `Chip` 添加不同的颜色。
<demo src="../../../example/chip/color.vue"  preview="[2-5]" />

## 图标

`chip` 内添加图标。
<demo src="../../../example/chip/icon.vue"  preview="[7-10]"  />

## 可删除

属性 `deletable` 为 `true` 时，`Chip` 可删除。
<demo src="../../../example/chip/deletable.vue" />

## 属性

<table-block type="propsZh" :data="props" />
