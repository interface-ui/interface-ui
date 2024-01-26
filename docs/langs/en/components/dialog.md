---
title: Dialog
lang: en
---

<script setup lang="ts">
  import props from "../../../example/dialog/description/en-props.ts";
  import slots from "../../../example/dialog/description/en-slots.ts";
</script>

# Dialog

The Dialog component displays a popup dialog that contains and facilitates user-related operations.

## Basic Usage

You need to use the `v-model` directive to control the display status of the Dialog. The Dialog is divided into three parts: `title`, `content`, and `footer`. You can combine them as needed to display the content.

<demo src="../../../example/dialog/base.vue" />

## Fullscreen Display

The `fullscreen` prop allows the Dialog to be displayed in fullscreen mode.
<demo src="../../../example/dialog/fullscreen.vue" />

## Attributes

<data-table type="props" lang="en" :data="props" />
