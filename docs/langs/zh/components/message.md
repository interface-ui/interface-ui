---
title: Message
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/message/description/zh-props.ts";
  import slots from "../../../example/message/description/zh-slots.ts";
</script>

# Message 消息提示

 `❗️更新中...`

::: warning
请注意多次 `new FnMessage` 只会创建一个 `Message` 实例。
:::

常用于主动操作后的反馈提示，鼠标悬停时消息不消失，鼠标移出后开始倒计时，倒计时结束后消息自动消失。

`Alert` 的属性可以用于Message，提供更加灵活的使用方式。



## 基础用法

调用 `FnMessage` 方法，传入 `message` 参数即可。

<demo src="../../../example/message/basic.vue" />

## 不同状态

`severity` 用来显示「成功、警告、消息、危险(错误)」类的操作反馈。

<demo src="../../../example/message/severity.vue" />

## 位置 `🔜 Coming soon`

`placement` 属性用来设置消息提示的位置

<!-- <demo src="../../../example/message/placement.vue" /> -->

## 自定义图标

`customIcon` 属性用来自定义图标。

<demo src="../../../example/message/icon.vue" />

## 关闭时间

`duration` 属性自动关闭的延时，单位毫秒，默认为 2000。

<demo src="../../../example/message/time.vue" />


## 手动关闭

借助 `actionEvent` 函数实现手动关闭。

<demo src="../../../example/message/action.vue" />

## 属性

`Alert`组件属性适用于 `Message`，此处不再赘述。[❗️ TODO]

<table-block type="propsZh" :data="props" />
