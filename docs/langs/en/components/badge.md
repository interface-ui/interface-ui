---
title: Badge
lang: en
---

<script setup lang="ts">
  import props from "../../../example/badge/description/en-props.ts";
</script>


# Badge

Numbers or status markers on buttons and icons.

## Basic

`value` is used to display the number of new messages

<demo src="../../../example/badge/basic.vue" />


## Max

The custom maximum value is defined by the `max` property and accepts the Number value.

<demo src="../../../example/badge/max.vue" />

## Color

Use `color` prop to customize the badge.

<demo src="../../../example/badge/color.vue" />

## Alignment

You can use the `xAlign` and `yAlign` props to move the badge to any corner of the wrapped element.

<demo src="../../../example/badge/align.vue" />


## Customizations

With the help of `styled` function, the `Badge` becomes more flexiable.

<demo src="../../../example/badge/custom.vue" />

## Attribute

<data-table type="props" lang="zh" :data="props" />


