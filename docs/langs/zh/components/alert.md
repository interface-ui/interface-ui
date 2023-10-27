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

## Basic usage

`Alert` 提供了四个严重级别，设置了独特的图标和颜色。

<demo src="../../../example/alert/base.vue"></demo>

## 描述

您可以使用`FnTypography`组件在内容上方显示格式化标题。

<demo src="../../../example/alert/description.vue"></demo>

## 操作

在组件末尾添加操作按钮。

<demo src="../../../example/alert/actions.vue"></demo>

## Icons

提供了`icon`属性，可以设置图标。 将图标道具设置为 `false` 将完全删除图标。

<demo src="../../../example/alert/icon.vue"></demo>


## Outlined

`Outlined` 镂空状态

<demo src="../../../example/alert/outlined.vue"></demo>

## Filled

`Filled` 填充状态

<demo src="../../../example/alert/filled.vue"></demo>

## Color

颜色道具将覆盖指定严重程度的默认颜色。

<demo src="../../../example/alert/color.vue"></demo>

## Attribute

<table-block type="propsZh" :data="props"></table-block>


## Slots
<table-block type="slotsZh" :data="slots"></table-block>
