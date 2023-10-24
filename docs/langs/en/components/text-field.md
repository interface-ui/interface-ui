---
title: Text Field
lang: en
---

<script setup lang="ts">
  import props from "../../../example/text-field/description/en-props.ts";
</script>

# Text Field

Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.

## Basic

The `TextField` comes with the form control label, input and supporting text.

The component support three variants: outlined (default), filled and standard.

<demo src="../../../example/text-field/basic.vue"></demo>

## Form props

Standard form attributes are supported e.g. `required`, `disabled`, `type`, etc.

<demo src="../../../example/text-field/form-props.vue"></demo>

## Size

The are small, medium, and large (default) three size to choose.

<demo src="../../../example/text-field/size.vue"></demo>

> The `label` will be hide automatically for `Filled` and `Standard` variants due to the limit of height.

## Color

Use `color` prop to change the focus color.

<demo src="../../../example/text-field/color.vue"></demo>

## Error and supporting text

The `error` accept a `Boolean` value to indicate the error state.

Also, the `supporting-text` can be set to provider more information.

<demo src="../../../example/text-field/error.vue"></demo>

## Attributes

<table-block type="propsEn" :data="props"></table-block>
