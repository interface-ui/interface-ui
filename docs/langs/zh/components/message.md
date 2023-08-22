---
title: Message
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/message/description/zh-props.ts";
  import slots from "../../../example/message/description/zh-slots.ts";
</script>

# Message 消息提示
常用于主动操作后的反馈提示，鼠标悬停时消息不消失，鼠标移出后开始倒计时，倒计时结束后消息自动消失。

## 基础用法

调用 ```FnMessage``` 方法，传入 ```message``` 参数即可。
<demo src="../../../example/message/base.vue"></demo>

## 不同状态

```state``` 用来显示「成功、警告、消息、危险(错误)」类的操作反馈。
<demo src="../../../example/message/type.vue"></demo>

## 关闭时间

```duration``` 属性自动关闭的延时，单位毫秒，不关闭设置为 ```0```。
<demo src="../../../example/message/time.vue"></demo>

## 手动关闭

显示关闭按钮。
<demo src="../../../example/message/close.vue"></demo>

## 关闭logo

```showIcon=false``` 不显示logo图标
<demo src="../../../example/message/icon.vue"></demo>

## 属性

<table-block type="propsZh" :data="props"></table-block>
