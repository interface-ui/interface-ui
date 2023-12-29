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

The `Button` comes with five variants: elevated, filled (default), tonal, outlined, and text
<demo src="../../../example/button/basic.vue" preview="[6-10]" />

### Elevated button

Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background.
<demo src="../../../example/button/elevated.vue" preview="[2, 3]" />

### Filled button

Filled buttons have the most visual impact after the FAB and should be used for necessary, final actions that complete a flow, like Save, Join now, or Confirm.
<demo src="../../../example/button/filled.vue" preview="[2, 3]" />

### Filled tonal button

A filled tonal button is an alternative middle ground between filled and outlined buttons. They’re helpful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as "Next" in an onboarding flow. Tonal buttons use secondary color mapping.
<demo src="../../../example/button/tonal.vue" preview="[2, 3]" />

### Outlined button

Outlined buttons are medium-emphasis buttons. They contain essential actions but aren’t the primary action in an app.
<demo src="../../../example/button/outlined.vue" preview="[2, 3]" />

### Text button

Text buttons are used for the lowest priority actions, especially when presenting multiple options.
<demo src="../../../example/button/text.vue" preview="[2, 3]" />

### Size

Buttons are stacked in small to large sizes; use a `size` prop to change the size.
<demo src="../../../example/button/sizes.vue" />

### Color

The `color` prop allows you to customize the color of the component.
<demo src="../../../example/button/color.vue" preview="[2-5]" />

### Shape

These are three shapes can be used: arc (default), rounded, and square
<demo src="../../../example/button/shapes.vue" preview="[2-4]" />


### Use with icon

Button with icon and label. The `leading` and `trailing` attributes help to optimize the style.
<demo src="../../../example/button/icon.vue" preview="[7, 8]" />


## Props

<table-block type="propsEn" :data="props" />


## Slots

<table-block type="slotsEn" :data="slots" />


## Icon Button

Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.
<demo src="../../../example/icon-button/basic.vue" />

### Size

There are three sizes provided: small, medium (default), and large
<demo src="../../../example/icon-button/size.vue" />

### color

<demo src="../../../example/icon-button/color.vue" />


## Attributes

<table-block type="propsEn" :data="props" />

## Slots

<table-block type="slotsEn" :data="slots" />
