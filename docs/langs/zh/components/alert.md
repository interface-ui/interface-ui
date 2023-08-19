---
title: Input
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/alert/description/zh-props.ts";
  import events from "../../../example/alert/description/zh-events.ts";
  import slots from "../../../example/alert/description/zh-slots.ts";
</script>

## Alert 提示

用于页面中展示重要的提示信息。

# 基础用法

```Alert``` 组件提供四种类型，由 ```type``` 属性指定，默认值为 ```info```
<demo src="../../../example/alert/base.vue"></demo>


## 自定义关闭按钮

```closable``` 属性用于定义是否显示关闭按钮，```closeArea``` 插槽用于自定义关闭按钮的内容。

当 Alert 组件被关闭时会触发 ```close``` 事件。

<demo src="../../../example/alert/close.vue"></demo>

## 文字居中

使用 ```center``` 属性来让文字水平居中。
<demo src="../../../example/alert/center.vue"></demo>

## 标题

使用 ```title``` 属性来给描述添加标题。
<demo src="../../../example/alert/title.vue"></demo>

## 前部固定内容

使用 ```fixedArea``` 插槽来给描述添加前部固定内容。
<demo src="../../../example/alert/flex-tip.vue"></demo>

## 滚动

使用 ```scrollable``` 默认开启向左的滚动，同样可以通过 ```duration``` 属性来定义滚动条的持续时间。
<demo src="../../../example/alert/scrollable.vue"></demo>

## 属性
<table-block type="propsZh" :data="props"></table-block>


## 事件
<table-block type="eventsZh" :data="events"></table-block>


## 插槽
<table-block type="slotsZh" :data="slots"></table-block>
