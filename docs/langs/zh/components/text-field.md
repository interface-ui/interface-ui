---
title: Text Field 文本输入
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/text-field/description/zh-props.ts";
</script>

# 文本字段

文本字段允许用户在用户界面中输入文本。它们通常出现在表单和对话框中。

## 基本

`TextField` 包含表单控件标签、输入框和支持文本。

该组件支持三种变体：oulined（默认）、filled和standard。

<demo src="../../../example/text-field/basic.vue"></demo>

## 表单属性

支持标准表单属性，例如 `required`、`disabled`、`type`、`placeholder` 等。

<demo src="../../../example/text-field/form-props.vue"></demo>

## 尺寸

有small、medium和large（默认）三种尺寸可供选择。

> `Filled` 和 `Standard` 变体的 `label` 会自动隐藏，因为高度受限。

<demo src="../../../example/text-field/size.vue"></demo>

## 标签

通过 `label` 属性可以启用 `TextField` 的内置标签。同时，你也可以通过 `FormLabel` 组件来使用外部标签。

<demo src="../../../example/text-field/label.vue"></demo>

## 颜色

使用 `color` 属性更改focus状态下的颜色。

<demo src="../../../example/text-field/color.vue"></demo>

## 错误状态和支持文本

`error` 接受 `Boolean` 类型以指示错误状态。

此外，可以设置 `supporting-text` 以提供更多描述信息。

<demo src="../../../example/text-field/error.vue"></demo>

## 属性

<table-block type="propsZh" :data="props"></table-block>
