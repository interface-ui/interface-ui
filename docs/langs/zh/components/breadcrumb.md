---
title: Breadcrumb
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/breadcrumb/description/zh-props.ts";
  import itemProps from "../../../example/breadcrumb/description/zh-props-item.ts";
</script>

# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

通过 `separator` 来设置分隔符。 默认值为 `/`。
<demo src="../../../example/breadcrumb/base.vue" />

## Breadcrumb 属性

<table-block type="propsZh" :data="props" />

## BreadcrumbItem 属性

<table-block type="propsZh" :data="itemProps" />
