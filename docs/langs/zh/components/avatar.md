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

<demo src="../../../example/avatar/base.vue"></demo>

## 字母头像

通过传递文字来生成字母头像。
<demo src="../../../example/avatar/letter.vue"></demo>

通常我们使用用来展示没有头像的用户。
<demo src="../../../example/avatar/no-avatar.vue"></demo>

## 尺寸

我们提供了三种尺寸的头像，分别是 `small`、`default`、`large`，也可以使用 ```height``` 和 ```width```来自定义头像的尺寸。
<demo src="../../../example/avatar/size.vue"></demo>

## 图标头像

通过传递图标来生成图标头像。
<demo src="../../../example/avatar/icon.vue"></demo>

## 形状

提供了三种形状的头像，分别是 `circle`、`square`、`rounded`。
<demo src="../../../example/avatar/shape.vue"></demo>

## 头像组

使用 ```avatar-group``` 将多个头像组合在一起， ```max``` 属性来限制显示的头像个数。
<demo src="../../../example/avatar/group.vue"></demo>

 ```total``` 属性来显示头像的总数。
<demo src="../../../example/avatar/total.vue"></demo>

## 属性
<table-block type="propsZh" :data="props"></table-block>


## 事件
<table-block type="eventsZh" :data="events"></table-block>


## 插槽
<table-block type="slotsZh" :data="slots"></table-block>
