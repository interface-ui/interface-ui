---
title: Checkbox
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/button/description/en-props.ts";
  import slots from "../../../example/button/description/en-slots.ts";
</script>

# Checkbox

复选框允许用户从一组项目中选择一个或多个项目。

复选框可用于打开或关闭选项。

如果在列表中有多个选项可供选择，您可以使用复选框而不是开关按钮来节省空间。如果只有一个选项，请避免使用复选框，而改用开关按钮。

> 我们保留了所有原生  `input` 的`属性`和`事件`。

## 使用

## 基础复选框

`Checkbox` 是一个受控组件，使用 `v-model` 来切换选中状态。

<demo src="../../../example/checkbox/basic.vue" />

## 尺寸

使用 `size` 属性或自定义 SVG 图标的字体大小来改变复选框的大小。

<demo src="../../../example/checkbox/size.vue" />

## 颜色

`color` 属性使您可以自定义组件的颜色。

<demo src="../../../example/checkbox/color.vue" />

您可以使用内置主题颜色 `'primary' | 'secondary' | 'tertiary' | 'error'`，

或者使用回调函数来访问我们的 `theme` 对象以获取颜色。

此外，直接传递支持 CSS 的颜色也可以工作。

## 图标

使用`命名插槽`来自定义图标。

利用插槽中的数据，以增强图标的兼容性。

<demo src="../../../example/checkbox/icon.vue" />

## 标签

您可以通过 `FormLabel` 组件为 `Checkbox` 提供标签。

所有的 `props` 和 `attrs` 都可以传递给 `FormLabel`，并将应用于 `Checkbox`。


<demo src="../../../example/checkbox/label.vue" />

## 标签位置

`label-placement` 属性提供了更改标签位置的功能。

<demo src="../../../example/checkbox/label-placement.vue" />

## 使用数组

此外，`v-model` 可以与 `value` 一起使用，以接受数组来实现类似 `CheckboxGroup` 的功能。

<demo src="../../../example/checkbox/multiple.vue" />
