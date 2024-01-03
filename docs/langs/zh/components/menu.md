---
title: Menu
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/menu/description/zh-props.ts";
  import events from "../../../example/menu/description/zh-events.ts";
</script>

# Menu 菜单

菜单用来展示一些临时性的选项。

::: info Notice
菜单是使用弹出框 [`Popover`](./popover.md)和列表 [`List`](./list.md) 组件构建的。
:::

## 基础用法

锚点`anchor`帮助菜单定位自身，而打开`open`用于切换菜单的开启/关闭状态。

<demo src="../../../example/menu/basic.vue" />

## 位置

在定位菜单时，首先会考虑通过属性传递的位置`placement`。

<demo src="../../../example/menu/placement.vue" />

::: warning Warning
最终的位置可能与传递给组件的属性不同。在打开菜单时，将计算可用空间以确定最终的菜单位置。
:::

## 子列表

列表`List`上的子列表属性`sublist prop`用于定位展开的子列表。

<demo src="../../../example/menu/sublist.vue" />

## 上下文菜单

锚点还可以是鼠标事件`MouseEvent`。这将有助于构建自定义上下文菜单`右键单击打开`。

<demo src="../../../example/menu/context.vue" />

# 属性

<data-table type="props" lang="zh" :data="props" />

## 事件

<table-block type="eventsZh" :data="events" />
