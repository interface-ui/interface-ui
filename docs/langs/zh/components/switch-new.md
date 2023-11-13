---
title: Switch
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/switch-new/description/zh-props.ts";
</script>


# Switch

基础用法

## 基础用法

绑定 `v-model` 到一个 `Boolean` 类型的变量，即可使用。

<demo src="../../../example/switch-new/base.vue" />

## 标签

使用`FormLabel`组件，您可以为`Switch`提供标签。

<demo src="../../../example/switch-new/label.vue" />

## 尺寸

使用`size`道具可以更改开关的大小。

<demo src="../../../example/switch-new/size.vue" />

## 颜色

`color`道具可以更改开关的颜色。
<demo src="../../../example/switch-new/color.vue" />


## 标签放置

可以更改标签的位置

<demo src="../../../example/switch-new/placement.vue" />

## 属性

<table-block type="propsZh" :data="props" />
