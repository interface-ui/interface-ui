---
title: Badge
lang: en
---

<script setup lang="ts">
  import props from "../../../example/badge/description/en-props.ts";
</script>


# Badge

Numbers or status markers on buttons and icons.


## Usage

### Basic badge

Use the `content` prop to pass the data.

The badge has two variants: dot and content (default). When `variant=dot`, the `content` prop will be ignored.
<demo src="../../../example/badge/basic.vue" preview="[9-11]" />

### Max

The max property defines the custom maximum value and accepts the number and string.
<demo src="../../../example/badge/max.vue" preview="[7-11]" />

### Color

Use the `color` prop to customize the badge.
<demo src="../../../example/badge/color.vue" preview="[12-14]" />

### Alignment

You can use the `x-align` and `y-align` props to move the badge to any corner of the wrapped element.
<demo src="../../../example/badge/align.vue" />

### Customizations

With the help of the `styled` function, the `<Badge />` becomes more flexible.
<demo src="../../../example/badge/custom.vue" preview="[45-50]" />


## Attribute

<data-table type="props" lang="en" :data="props" />


