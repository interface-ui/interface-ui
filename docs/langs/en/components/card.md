---
title: Card
lang: en-US
---

<script setup lang="ts">
  import props from "../../../example/card/description/en-props.ts";
  import slots from "../../../example/card/description/en-slots.ts";
</script>

# Card
Common display cards.

## Basic usage

<demo src="../../../example/card/base.vue" />

## Borderless card
Use `border` attribute to define card's border.

<demo src="../../../example/card/border.vue" />

## Card hover effect
Use `hover`attribute to define whether the card has a border

<demo src="../../../example/card/hover.vue" />

## Card with background color
Use `background`attribute to define card background color

<demo src="../../../example/card/background.vue" />

## Props

<table-block type="propsEn" :data="props" />

## Slots

<table-block type="slotsEn" :data="slots" />
