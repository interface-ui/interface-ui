---
title: Avatars
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/avatar/description/zh-props.ts";
  import events from "../../../example/avatar/description/zh-events.ts";
  import slots from "../../../example/avatar/description/zh-slots.ts";
</script>

# Avatar 图片头像

Avatar 组件可以用来代表人物或对象, 支持图片文字或者图标。

## 基础用法

<demo src="../../../example/avatar/basic.vue" />

## 字母头像

通过传递文字来生成字母头像。

<demo src="../../../example/avatar/letter.vue" />

通常我们使用用来展示没有头像的用户。

<demo src="../../../example/avatar/no-avatar.vue" />

## 尺寸

我们提供了三种尺寸的头像，分别是 `small`、`default`、`large`，也可以使用 `height` 和 `width`来自定义头像的尺寸。

<demo src="../../../example/avatar/size.vue" />

## 图标头像

通过传递图标来生成图标头像。

<demo src="../../../example/avatar/icon.vue" />

## 形状

提供了三种形状的头像，分别是 `circle`、`square`、`rounded`。

<demo src="../../../example/avatar/variant.vue" />

## 头像组

使用 `AvatarGroup` 将多个头像组合在一起， `max` 属性来限制显示的头像个数。

`AvatarGroup` 支持所有 `Avatar` 的属性来统一控制其样式。

<demo src="../../../example/avatar/group.vue" />

## 属性
<table-block type="propsZh" :data="props" />


## 事件
<table-block type="eventsZh" :data="events" />


## 插槽
<table-block type="slotsZh" :data="slots" />
