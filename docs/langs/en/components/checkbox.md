---
title: Checkbox
lang: en-US
---

<script setup lang="ts">
  import props from "../../../example/checkbox/description/en-props.ts";
  import slots from "../../../example/checkbox/description/en-slots.ts";
</script>

# Checkbox

Checkboxes allow the user to select one or more items from a set.

Checkboxes can be used to turn an option on or off.

If multiple options appear in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and an on/off switch instead.

> We retain all `attributes` and `events` of native `input`


## Usage

### Basic checkbox

`<Checkbox />` is a controlled component; use `v-model` to switch the checked status.
<demo src="../../../example/checkbox/basic.vue" preview="[8-11]" />

### Size

Use the `size` prop or customize the font size of the SVG icons to change the size of the checkboxes.
<demo src="../../../example/checkbox/size.vue" preview="[8-10]" />

### Color

The `color` prop allows you to customize the color of the component.
<demo src="../../../example/checkbox/color.vue" />

You can use build-in `ThemeSchemes` from the theme

Or use a callback function to access our `theme` object to get the color

Also, simply passing a CSS-Supported color worked

### Icon

<demo src="../../../example/checkbox/icon.vue" preview="[12-15]" />

### Lable

You can provide a label to the `Checkbox` thanks to the `FormLabel` component.

All the `props` and `attrs` can be passed to `FormLabel` and will be applied to the `Checkbox`
<demo src="../../../example/checkbox/label.vue" />

### Label Placement

The `label-placement` prop provides the ability to change the placement of the label
<demo src="../../../example/checkbox/label-placement.vue" />

### Use with array

Also, the `v-model` can work with `value` to accept an `array` to implement the function like `CheckboxGroup`
<demo src="../../../example/checkbox/multiple.vue" />


## Attributes

<data-table type="props" lang="en" :data="props" />


## Slots

<data-table type="slots" lang="en" :data="slots" />
