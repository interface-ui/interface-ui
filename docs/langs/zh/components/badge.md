---
title: Badge
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/badge/description/zh-props.ts";
</script>


## Badge

按钮和图标上的数字或状态标记。

## 基础用法

```value``` 用来展示新消息的数量, ```color``` 用来设置背景色。
<demo src="../../../example/badge/base.vue"></demo>


## 最大值

自定义最大值，由 ```max``` 属性定义，接受 Number 值。
<demo src="../../../example/badge/max.vue"></demo>


## 自定义

当 ```value``` 是 ```String``` 时，可以显示自定义文字。

<demo src="../../../example/badge/custom.vue"></demo>

## 小圆点

```dot``` 属性用来显示小圆点，此时 ```value``` 属性无效。
<demo src="../../../example/badge/dot.vue"></demo>

## 闪烁

```flashing``` 属性用来设置闪动效果，它是一个 ```Boolean``` 值。

<demo src="../../../example/badge/flashing.vue"></demo>

## 属性
<table-block type="propsZh" :data="props"></table-block>


