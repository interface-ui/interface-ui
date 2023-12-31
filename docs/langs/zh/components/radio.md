---
title: Radio
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/radio/description/zh-props.ts";
</script>

# 单选框

单选框组允许用户从一组选项中选择一个选项。

当用户需要查看所有可用选项时，请使用单选按钮。如果可用选项可以折叠，考虑使用选择组件，因为它占用较少的空间。

单选按钮应默认选择最常用的选项。


## 用法

### 基本单选框

通常，`<Radio />` 与 `<FormLabel />` 组件一起使用，以显示标签。

使用 `v-model` 绑定变量和 `value` 作为选定的值
<demo src="../../../example/radio/basic.vue" />

### 独立的单选按钮

`<Radio />` 也可以独立使用，无需 `<FormLabel />` 组件。

<demo src="../../../example/radio/standalone.vue" preview="[8, 9]" />

### 大小和颜色

`size` 和 `color` 属性可用于控制 `<Radio />` 的外观。
<demo col src="../../../example/radio/size-color.vue" />

### 标签位置

您可以使用 `<FormLabel />` 组件的 `label-placement` 属性来更改标签的位置：

<demo src="../../../example/radio/label-placement.vue" />


## 属性

<table-block type="propsZh" :data="props" />
