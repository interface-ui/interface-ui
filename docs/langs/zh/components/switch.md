---
title: Input
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/switch/description/zh-props.ts";
  import events from "../../../example/switch/description/zh-events.ts";
</script>


## Switch 开关

表示两种相互对立的状态间的切换


# 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量，即可使用。

<demo src="../../../example/switch/base.vue"></demo>


# 开关颜色

```color``` 属性可以设置开关的颜色。

<demo src="../../../example/switch/color.vue"></demo>

# 文字描述

``` checked-text``` ```un-checked-text``` 设置开关的文字描述，超出长度会被隐藏。

<demo src="../../../example/switch/text.vue"></demo>


# 显示自定义图标

使用 ```checked-icon``` 和 ```un-checked-icon``` 属性来添加图标。```checkedIconColor``` 和 ```unCheckedIconColor``` 可以设置图标的颜色。

<demo src="../../../example/switch/icon.vue"></demo>

# 禁用状态

```disabled``` 属性可以设置开关的禁用状态。

<demo src="../../../example/switch/disabled.vue"></demo>

## 属性
<table-block type="propsZh" :data="props"></table-block>


## 事件
<table-block type="eventsZh" :data="events"></table-block>

