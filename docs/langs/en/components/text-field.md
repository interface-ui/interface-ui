---
title: Text Field
lang: en
---

<script setup lang="ts">
  import props from "../../../example/text-field/description/en-props.ts";
  import slots from "../../../example/text-field/description/en-slots.ts";
</script>

# Text Field

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Usage

### Basic text field

The `<TextField />` comes with the form control label, input, and supporting text.

The component supports three variants: outlined (default), filled, and standard.
<demo src="../../../example/text-field/basic.vue" preview="[8]" />

### Form props

Standard form attributes are supported, e.g., `required``, `disabled`, `type`, `placeholder` etc.
<demo col src="../../../example/text-field/form-props.vue" />

### Size

There are three sizes to choose from: small, medium, and large (default).
<demo col src="../../../example/text-field/size.vue" />

> The `label` will be hide automatically for `Filled` and `Standard` variants due to the limit of height.

### Label

Set `label` to enable the internal label of `<TextField />`. Also, you can use an external label with the help of `FormLabel`
<demo src="../../../example/text-field/label.vue" />

### Icon

You can add an internal icon to the `<TextField />` via the name slots or customize the external icon yourself.

The `leading` and `trailing` attributes help to optimize the style. Also, you can use the scoped slots.
<demo src="../../../example/text-field/icon.vue" />

### More flexible

It is more flexible to use icons with other component
<demo src="../../../example/text-field/icon-flexible.vue" />

### Color

Use the `color` prop to change the focus color.

<demo src="../../../example/text-field/color.vue" preview="[15-20]" />

### Error and supporting text

The `error` accepts a `Boolean`` value to indicate the error state.

Also, the `supporting-text` can be set to provide more information.
<demo src="../../../example/text-field/error.vue" preview="[8-13]" />


## Attributes

<data-table type="props" lang="en" :data="props" />


## Slots

<data-table type="slots" lang="en" :data="slots" />
