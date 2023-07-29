---
title: Message
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/message/description/en-props.ts";
</script>

# Message 

常用于主动操作后的反馈提示。

## Basic Usage

<demo src="../../../example/message/base.vue"></demo>

## Different states

用来显示「成功、警告、消息、危险(错误)」类的操作反馈。
<demo src="../../../example/message/type.vue"></demo>

## Closing time

The delay of automatic shutdown is in milliseconds. If you don't close it, you can write ```0```.
<demo src="../../../example/message/time.vue"></demo>

## Manually close

<demo src="../../../example/message/close.vue"></demo>

## Attributes

<table-block type="propsZh" :data="props"></table-block>
