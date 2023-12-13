---
title: Chip
lang: en
---

<script setup lang="ts">
  import props from "../../../example/chip/description/en-props.ts";
</script>

# Chip

Chips help people enter information, make selections, filter content, or trigger actions

## Basic usage

`Chip` supports two variants: `fill` and `outlined`.

<demo src="../../../example/chip/basic.vue" preview="[2-5]" />

## Clickable

Make the `Chip` clickable by setting `clickable=true`.

This will use `<ActionArea>` component enternal, use `component` prop to render to the other tag.

<demo src="../../../example/chip/clickable.vue"  preview="[2, 3]" />

## Color

The prop `color` can add different colors to `Chip`.

<demo src="../../../example/chip/color.vue"  preview="[2-6]" />

## Icon

You can add the icon to the default slot directly.

<demo src="../../../example/chip/icon.vue"  preview="[7-14]"  />

## Deletable

When the attribute `deletable=true`, `Chip` will display a close icon and will emit `close` method when its clicked.

<demo src="../../../example/chip/deletable.vue" />

## Attributes

<table-block type="propsEn" :data="props" />
