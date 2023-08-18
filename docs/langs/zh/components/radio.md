---
title: Radio
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/radio/description/zh-props.ts";
  import events from "../../../example/radio/description/zh-events.ts";
</script>


## Radio 单选框

进行选择操作


# 基础用法

只需要设置 ```v-model``` 绑定变量，```value``` 为选中值。
<demo src="../../../example/radio/base.vue"></demo>


## 禁用状态

通过 ```disabled``` 属性禁用单选框。

<demo src="../../../example/radio/disabled.vue"></demo>


## 单选框组

 传入```option-list```属性，可以生成一组单选框。
<demo src="../../../example/radio/option-list-horizontal.vue"></demo>


 通过 ```horizontal = false``` 生成一组垂直排列的单选框。

<demo src="../../../example/radio/option-list.vue"></demo>

## 自定义按钮颜色

 通过 ```color``` 属性自定义按钮颜色。
<demo src="../../../example/radio/color.vue"></demo>


## 属性
<table-block type="propsZh" :data="props"></table-block>


## 事件
<table-block type="eventsZh" :data="events"></table-block>

