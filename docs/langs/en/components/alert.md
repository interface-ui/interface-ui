---
title: Alert
lang: en
---

<script setup lang="ts">
  import props from "../../../example/alert/description/en-props.ts";
  import slots from "../../../example/alert/description/en-slots.ts";
</script>


# Alert

Used to display important reminder information on the page.

## Basic usage

`Alert` provides four severity levels and sets unique icons and colors.

<demo src="../../../example/alert/base.vue"></demo>

## Description

You can use the 'FnTypography' component to display formatting titles above the content.

<demo src="../../../example/alert/description.vue"></demo>

## Actions

Add an action button at the end of the component.

<demo src="../../../example/alert/actions.vue"></demo>

## Icons

The `icon` property is provided to set the icon. Setting the icon prop to `false` will completely delete the icon.

<demo src="../../../example/alert/icon.vue"></demo>


## Outlined

`Outlined` status

<demo src="../../../example/alert/outlined.vue"></demo>

## Filled

`Filled` status

<demo src="../../../example/alert/filled.vue"></demo>

## Color

The color prop will override the default color of the specified severity.

<demo src="../../../example/alert/color.vue"></demo>

## Attribute

<table-block type="propsEn" :data="props"></table-block>


## Slots
<table-block type="slotsEn" :data="slots"></table-block>
