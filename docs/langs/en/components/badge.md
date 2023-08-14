---
title: Badge
lang: en
---

<script setup lang="ts">
  import props from "../../../example/badge/description/en-props.ts";
</script>


## Badge

Numbers or status markers on buttons and icons.

## Basic usage

```value``` is used to display the number of new messages, ```color```` is used to set the background color.
<demo src="../../../example/badge/base.vue"></demo>


## Max

The custom maximum value is defined by the ```max``` property and accepts the Number value.
<demo src="../../../example/badge/max.vue"></demo>


## Customizations

When ```value``` is ```String```, custom text can be displayed.

<demo src="../../../example/badge/custom.vue"></demo>

## Dot

The ```dot``` attribute is used to display small dots, but the value attribute is invalid.
<demo src="../../../example/badge/dot.vue"></demo>

## Flashing

The ```flashing``` property is used to set the flashing effect, which is a ```Boolean``` value.

<demo src="../../../example/badge/flashing.vue"></demo>

## Attribute
<table-block type="propsZh" :data="props"></table-block>


