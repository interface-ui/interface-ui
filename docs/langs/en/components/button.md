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

<demo src="../../../example/button/basic.vue" preview="[2-4]" />

### Text button

Text buttons are used for the lowest priority actions, especially when presenting multiple options.

<demo src="../../../example/button/text.vue" preview="[2, 3]" />

### Filled button

Filled buttons have the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.

<demo src="../../../example/button/filled.vue" />

Use `disable-elevation` prop to remove the elevation.

<demo src="../../../example/button/no-elevation.vue" />


### Outlined button

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.

<demo src="../../../example/button/outlined.vue" />

### size

Buttons stacked small to large sizes, use `size` prop to change the size.

<demo src="../../../example/button/sizes.vue" />

### color

The `color` prop makes you can customize the color of component.

<demo src="../../../example/button/color.vue" />

### shape

There three shapes can be used: rounded (default), square, and fullRounded

<demo src="../../../example/button/shapes.vue" />


### Use with icon

Button with icon and label

<demo src="../../../example/button/icon.vue" />

## Props

<table-block type="propsEn" :data="props" />


## Slots

<table-block type="slotsEn" :data="slots" />

## Icon Button

Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.

<demo src="../../../example/icon-button/basic.vue" />

### Size

There are three size provided: small, medium (default), and large

<demo src="../../../example/icon-button/size.vue" />

### color

<demo src="../../../example/icon-button/color.vue" />


## Attributes

<table-block type="propsEn" :data="props" />

## Slots

<table-block type="slotsEn" :data="slots" />
