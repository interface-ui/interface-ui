---
title: Switch
lang: en
---

<script setup lang="ts">
  import props from "../../../example/switch-new/description/en-props.ts";
</script>


# Switch

Indicates the switching between two opposing states


## Basic usage

Bind the ```v-model``` to a variable of type ```Boolean``` to use it.

<demo src="../../../example/switch-new/base.vue"></demo>

## Label
You can provide a label to the `Switch` thanks to the `FormControlLabel` component.

<demo src="../../../example/switch-new/label.vue"></demo>

## Size

Use the `size` prop to change the size of the switch

<demo src="../../../example/switch-new/size.vue"></demo>

## Color

The `color` prop can change the color of the switch


<demo src="../../../example/switch-new/color.vue"></demo>

## Label placement

You can change the placement of the label

<demo src="../../../example/switch-new/placement.vue"></demo>

## 属性

<table-block type="propsEn" :data="props"></table-block>
