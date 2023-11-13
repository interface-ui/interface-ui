---
title: Alert
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/alert/description/zh-props.ts";
  import slots from "../../../example/alert/description/zh-slots.ts";
</script>


# Alert

用于在页面上显示重要提示信息。

## 基本用法

`Alert` 提供了四个严重级别，设置了独特的图标和颜色。

<demo src="../../../example/alert/base.vue" />

## 描述

您可以使用`FnTypography`组件在内容上方显示格式化标题。

<demo src="../../../example/alert/description.vue" />

## 操作

在组件末尾添加操作按钮。

<demo src="../../../example/alert/actions.vue" />

## 图标

提供了`icon` 插槽，可以设置图标。 将图标道具设置为 `false` 将完全删除图标。

<demo src="../../../example/alert/icon.vue" />


## 变种

Variant 提供了两种填充状态`Filled` 与 `Outlined`，默认`Filled`。

<demo src="../../../example/alert/outlined.vue" />

## Color

提供了 `cs` 属性，灵活配置想要的颜色。

<demo src="../../../example/alert/color.vue" />

## Attribute

<table-block type="propsZh" :data="props" />


## Slots
<table-block type="slotsZh" :data="slots" />
