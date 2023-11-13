---
title: Floating action button
lang: en
---

<script setup lang="ts">
  import props from "../../../example/fba/description/en-props.ts";
</script>

# Floating action button

Floating action buttons (FABs) help people take primary actions

Use a FAB for the most important action on a screen. The FAB appears in front of all other content on screen, and is recognizable for its rounded shape and icon in the center.

Only use a FAB for presenting a screen's primary action.

The FAB can be aligned left, center, or right. It can be positioned above the navigation bar, or nested within the bar.

## Usage

<demo src="../../../example/fba/basic.vue" preview="[7-14]" />

## Size

The size of FBA can be small, medium (default), and large. Use `size` prop to change it.

<demo src="../../../example/fba/size.vue" preview="[7-15]" />

## Color

Use `color` to style the FBA component

<demo src="../../../example/fba/color.vue" preview="[7-16]" />

## Attributes

<table-block type="propsEn" :data="props" />
