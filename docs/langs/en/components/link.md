---
title: Link
lang: en
---

<script setup lang="ts">
  import props from "../../../example/link/description/en-props.ts";
</script>

# Link

The Link component allows you to easily customize anchor elements with your theme colors and typography styles.

## Basic Usage

The `Link` component is built on top of the `Typography` component, meaning that you can use its props

<demo src="../../../example/link/basic.vue"></demo>

## Color

Text links with different colors.

<demo src="../../../example/link/color.vue"></demo>

## Underline

Underline for text links.

<demo src="../../../example/link/underline.vue"></demo>

## Attributes

<table-block type="propsEn" :data="props"></table-block>
