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

<demo src="../../../example/card/base.vue"></demo>

## Borderless card
Use `border` attribute to define card's border.

<demo src="../../../example/card/border.vue"></demo>

## Card hover effect
Use `hover`attribute to define whether the card has a border

<demo src="../../../example/card/hover.vue"></demo>

## Card with background color
Use `background`attribute to define card background color

<demo src="../../../example/card/background.vue"></demo>

## Props

<table-block type="propsEn" :data="props"></table-block>

## Slots

<table-block type="slotsEn" :data="slots"></table-block>