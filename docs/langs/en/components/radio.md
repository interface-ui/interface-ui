---
title: Radio
lang: en
---

<script setup lang="ts">
  import props from "../../../example/radio/description/en-props.ts";
</script>


# Radio

The Radio Group allows the user to select one option from a set.

Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space.

Radio buttons should have the most commonly used option selected by default.


## Usage

### Basic radio

Usually, `<Radio />` works with `<FormLabel />` component to display the label.

We use the `v-model` binding variable and `value` as the selected value.
<demo src="../../../example/radio/basic.vue" />

### Standalone radio buttons

`<Radio />` can also be used standalone, without the `<FormLabel />` component.
<demo src="../../../example/radio/standalone.vue" preview="[8, 9]" />

### Size and Color

The `size` and `color` props can be used to control the appearance of the `<Radio />`.
<demo col src="../../../example/radio/size-color.vue" />

### Label placement

You can change the placement of the label with the `<FormLabel />` component's `label-placement` prop:

<demo src="../../../example/radio/label-placement.vue" />


## Attributes

<data-table type="props" lang="en" :data="props" />
