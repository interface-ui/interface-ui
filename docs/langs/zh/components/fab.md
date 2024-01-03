---
title: Floating action button 悬浮操作按钮
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/fab/description/zh-props.ts";
  import slots from "../../../example/button/description/zh-slots.ts";
</script>

# 悬浮操作按钮

悬浮操作按钮（FAB）帮助人们执行主要操作

在屏幕上使用悬浮操作按钮来执行最重要的操作。悬浮操作按钮会显示在屏幕上的所有其他内容之前，以其圆形形状和中央图标而闻名。

只使用悬浮操作按钮来呈现屏幕的主要操作。

悬浮操作按钮可以左对齐、居中或右对齐。它可以放置在导航栏之上，或者嵌套在导航栏中。

## 用法

### 基本悬浮操作按钮

<demo src="../../../example/fab/basic.vue"   preview="[9-16]" />

### 大小

悬浮操作按钮的大小可以是小、中（默认）和大。使用 `size` 属性来更改大小。
<demo src="../../../example/fab/size.vue"  preview="[7-15]" />

### 颜色

使用 `color` 来为悬浮操作按钮组件设置样式
<demo src="../../../example/fab/color.vue"  preview="[9-18]" />

## 属性

<data-table type="props" lang="en" :data="props" />

## 插槽

<data-table type="slots" lang="en" :data="slots" />
