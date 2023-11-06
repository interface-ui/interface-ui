---
title: Link
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/link/description/zh-props.ts";
</script>


# Link 链接

Link 组件允许您使用主题颜色和版式样式轻松自定义锚元素。

## 基础用法

`Link` 组件构建在 `Typography` 组件之上，这意味着您可以使用它的 props

<demo src="../../../example/link/basic.vue"></demo>

## 颜色

基础的文字链接用法。

<demo src="../../../example/link/color.vue"></demo>

## 下划线

文字链接下划线。

<demo src="../../../example/link/underline.vue"></demo>

# 属性

<table-block type="propsZh" :data="props"></table-block>
