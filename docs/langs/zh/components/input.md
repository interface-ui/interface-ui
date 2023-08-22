---
title: Input
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/input/description/zh-props.ts";
  import events from "../../../example/input/description/zh-events.ts";
</script>


## Input 输入框

通过键盘输入字符


# 基础用法

<demo src="../../../example/input/base.vue"></demo>


## 禁用状态

通过 ```disabled``` 属性禁用输入框。
<demo src="../../../example/input/disabled.vue"></demo>

# 内容清空

通过 ```clearable``` 属性一键清空输入框。
<demo src="../../../example/input/clear.vue"></demo>

## 图标输入框

通过 ```prefixIcon``` 和 ```suffixIcon``` 属性在输入框两侧添加自定义图标。
<demo src="../../../example/input/icon.vue"></demo>

## 密码框

通过 ```password``` 属性得到一个可以切换显隐密码的输入框。

<demo src="../../../example/input/password.vue"></demo>


## 数字框

通过 ```number``` 属性得到一个可以只允许输入数字的输入框。

<demo src="../../../example/input/number.vue"></demo>

## 文本框

通过 ```textarea``` 属性将输入框变为文本域，

文本域没有 ```clearable``` 、 ```prefixIcon``` 和 ```suffixIcon``` 属性。

<demo src="../../../example/input/textarea.vue"></demo>

## 文本域禁用状态

同样适用 ```disabled``` 属性禁用文本域，事件触发同输入框。

<demo src="../../../example/input/disabled-textarea.vue"></demo>



## 属性
<table-block type="propsZh" :data="props"></table-block>


## 事件
<table-block type="eventsZh" :data="events"></table-block>

