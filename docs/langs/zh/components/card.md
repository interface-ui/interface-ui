---
title: Card
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/card/description/zh-props.ts";
  import slots from "../../../example/card/description/zh-slots.ts";
</script>

# Card

常见的展示卡片。

## 基础用法

<demo src="../../../example/card/base.vue"></demo>

## 无边框卡片
使用 `border`属性来定义卡片是否有边框。

<demo src="../../../example/card/border.vue"></demo>

## 卡片悬浮效果
使用 `hover`属性来定义卡片是否有边框。

<demo src="../../../example/card/hover.vue"></demo>

## 带有背景颜色的卡片
使用 `background`属性来定义卡片背景颜色。

<demo src="../../../example/card/background.vue"></demo>

## 属性

<table-block type="propsZh" :data="props"></table-block>

## 插槽

<table-block type="slotsZh" :data="slots"></table-block>
