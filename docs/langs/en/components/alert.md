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

<demo src="../../../example/alert/base.vue" />

## Description

You can use the 'FnTypography' component to display formatting titles above the content.

<demo src="../../../example/alert/description.vue" />

## Actions

Add an action button at the end of the component.

<demo src="../../../example/alert/actions.vue" />

## Icons

The `icon` property is provided to set the icon. Setting the icon prop to `false` will completely delete the icon.

<demo src="../../../example/alert/icon.vue" />

## Variant

The Variant property provides two filling states, `Filled` and `Outlined`, with the default being `Filled`.

<demo src="../../../example/alert/outlined.vue" />


## Cs

The `cs` attribute is provided to flexibly configure the desired color.

<demo src="../../../example/alert/color.vue" />

## Attribute

<table-block type="propsEn" :data="props" />


## Slots
<table-block type="slotsEn" :data="slots" />
