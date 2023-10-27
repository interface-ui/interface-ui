---
title: Switch
lang: en
---

<script setup lang="ts">
  import props from "../../../example/switch/description/en-props.ts";
</script>


# Switch

Switches toggle the state of an item on or off.

Switches are the preferred way to adjust settings. They're used to control binary options – think On/Off or True/False.

## Basic

Bind the `v-model` to a variable of type `Boolean` to use it.

<demo src="../../../example/switch/basic.vue"></demo>

## Size and color

The `color` attribute can set the color of the switch.

<demo src="../../../example/switch/size-color.vue"></demo>

## Icon

There is a confirm icon in checked state by default, use `disabled-icon` to hide it.

<demo src="../../../example/switch/icon.vue"></demo>

## Attributes
<table-block type="propsZh" :data="props"></table-block>
