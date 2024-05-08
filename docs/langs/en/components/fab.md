---
title: Floating action button
lang: en
---

<script setup lang="ts">
  import props from "../../../example/fab/description/en-props.ts";
  import slots from "../../../example/button/description/en-slots.ts";
</script>

# Floating action button

Floating action buttons (FABs) help people take primary actions

Use a `<Fab />` for the most crucial action on a screen. The FAB appears in front of all other content on the screen and is recognizable for its rounded shape and icon in the center.

Only use a `<Fab />` for presenting a screen's primary action.

The FAB can be aligned left, center, or right. It can be positioned above the navigation bar or nested within it.

## Usage

### Basic floating action button

<demo src="../../../example/fab/basic.vue"  preview="[7-14]" />

### Size

The size of `<Fab />` can be small, medium (default), and large. Use the `size` prop to change it.
<demo src="../../../example/fab/size.vue"  preview="[6-14]" />

### Color

Use `color` to style the `<Fab />` component
<demo src="../../../example/fab/color.vue" preview="[7-16]" />

## Attributes

<data-table type="props" lang="en" :data="props" />

## Slots

<data-table type="slots" lang="en" :data="slots" />
