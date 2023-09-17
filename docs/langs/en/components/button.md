---
title: Button
lang: en-US
---

<script setup lang="ts">
  import props from "../../../example/button/description/en-props.ts";
  import slots from "../../../example/button/description/en-slots.ts";
</script>

# Button

Common operation buttons.

## Usage

### Basic button

The `Button` comes with three variants: text, filled (default), and outlined

<demo src="../../../example/button/basic.vue"></demo>

### Text button

Text buttons are used for the lowest priority actions, especially when presenting multiple options.

<demo src="../../../example/button/text.vue"></demo>

### Filled button

Filled buttons have the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.

<demo src="../../../example/button/filled.vue"></demo>

Use `disable-elevation` prop to remove the elevation.

<demo src="../../../example/button/no-elevation.vue"></demo>


### Outlined button

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.

<demo src="../../../example/button/outlined.vue"></demo>

### size

Buttons stacked small to large sizes, use `size` prop to change the size.

<demo src="../../../example/button/sizes.vue"></demo>

### color

The `color` prop makes you can customize the color of component.

<demo src="../../../example/button/color.vue"></demo>

### shape

There three shapes can be used: rounded (default), square, and fullRounded

<demo src="../../../example/button/shapes.vue"></demo>


### Use with icon

Button with icon and label

<demo src="../../../example/button/icon.vue"></demo>

## Props

<table-block type="propsEn" :data="props"></table-block>


## Slots

<table-block type="slotsEn" :data="slots"></table-block>
