---
title: Checkbox
lang: en-US
---

<script setup lang="ts">
  import props from "../../../example/button/description/en-props.ts";
  import slots from "../../../example/button/description/en-slots.ts";
</script>

# Checkbox

Checkboxes allow the user to select one or more items from a set.

Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.

> We retain all `attributes` and `events` of native `input`

## Usage

### Basic checkboxs

`Checkbox` is a controlled component, use `v-model` to switch the checked status.

<demo src="../../../example/checkbox/basic.vue" />

### Size

Use the `size` prop or customize the font size of the svg icons to change the size of the checkboxes.

<demo src="../../../example/checkbox/size.vue" />

### Color

The `color` prop makes you can customize the color of component.

<demo src="../../../example/checkbox/color.vue" />

You can use build-in theme color `'primary' | 'secondary' | 'tertiary' | 'error'`

Or use a callback funtion to accecc our `theme` object to get the color

Also, simply pass a CSS-Supported color worked
### Icon

Use customize icon by `named slot`.

Use the data from the slot to make the icon more compatible.

<demo src="../../../example/checkbox/icon.vue" />

### Lable

You can provide a label to the `Checkbox` thanks to the `FormLabel` component.

All the `props` and `attrs` can be passed to `FormLabel` and will be applied to the `Checkbox`

<demo src="../../../example/checkbox/label.vue" />

### Label Placement

`label-placement` prop provide the ability to change the placement of the label

<demo src="../../../example/checkbox/label-placement.vue" />

## Use with array

Also, `v-model` can work with `value` to accept `array` to implement the function like `CheckboxGroup`

<demo src="../../../example/checkbox/multiple.vue" />
