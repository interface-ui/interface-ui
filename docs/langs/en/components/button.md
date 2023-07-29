---
title: Button
lang: en-US
---

<script setup lang="ts">
  import props from "../../../example/button/description/en-props.ts";
  import slots from "../../../example/button/description/en-slots.ts";
</script>

# Button

Common operation buttons.

## Usage

### type

You can use the type, plain, round, and circle attributes to define the style of the button.

<demo src="../../../example/button/types.vue"></demo>

### size

Buttons stacked small to large sizes.

<demo src="../../../example/button/sizes.vue"></demo>

### state


### shape

Predefined the shape of the button.

<demo src="../../../example/button/shapes.vue"></demo>

### disabled

You can use the disabled attribute to define whether the button is disabled.

<demo src="../../../example/button/disabled.vue"></demo>


### icon

Button with icon.

<demo src="../../../example/button/icon.vue"></demo>

## Props

<table-block type="propsEn" :data="props"></table-block>


## Slots

<table-block type="slotsEn" :data="slots"></table-block>
