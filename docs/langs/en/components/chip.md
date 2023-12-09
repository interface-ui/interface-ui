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

`Chip` supports two types of `fill` and `contour`.

<demo src="../../../example/chip/base.vue" preview="[2, 3]" />

## Clickable

Add the `clickable` attribute to `Chip` so that it can be clicked.
<demo src="../../../example/chip/clickable.vue"  preview="[2, 3]" />

## Disabled

The disabled `Chip` cannot be clicked.
<demo src="../../../example/chip/disabled.vue"  preview="[2, 5]" />

## Color

The attribute `color` can add different colors to `Chip`.
<demo src="../../../example/chip/color.vue"  preview="[2, 5]" />

## Icon

Add an icon in `chip`.
<demo src="../../../example/chip/icon.vue"  />

## Deletable

When the attribute `deletable` is `true`, `Chip` can be deleted.
<demo src="../../../example/chip/deletable.vue" />

## Attributes

<table-block type="propsEn" :data="props" />
