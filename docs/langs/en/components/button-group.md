---
title: Button Group
lang: en-US
---

<script setup lang="ts">
  import props from "../../../example/button-group/description/en-props.ts";
  import slots from "../../../example/button-group/description/en-slots.ts";
</script>


# Button Group

The ButtonGroup Component can be used to group the button.

## Usage

### Basic button group

The `<ButtonGroup />` can group the [`<Button />`](./button.md) components as its immediate children and control their styles.
<demo col src="../../../example/button-group/basic.vue" preview="[2-11]" />

### Variants

All the standard [button variants](./button.md) are supported.
<demo src="../../../example/button-group/variant.vue" />

### Shapes

All the standard [button shapes](./button.md#shape) are also supported.
<demo col src="../../../example/button-group/shape.vue" preview="[2-6, 12-16]" />

### Orientation

`<ButtonGroup />` support horizontal (default) and vertical
<demo src="../../../example/button-group/orientation.vue" preview="[2-6]" />

### Size and Color

The `size` and `color` props can be used to control the appearance of the button group.
<demo col src="../../../example/button-group/size-color.vue" preview="[2-6]" />

### Specific prop for button

You can set the prop on the specific buttons.
<demo col src="../../../example/button-group/specific.vue" preview="[8-13]" />

### Split button

`<ButtonGroup />` can also be used to create a split button. This feature can collaborate with [`<Menu />`](./menu.md) or other components to implement some powerful features.
<demo col src="../../../example/button-group/split.vue" />


## Attributes

<table-block type="propsEn" :data="props" />


## Slots

<table-block type="slotsEn" :data="slots" />
