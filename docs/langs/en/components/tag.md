---
title: Tag
lang: en
---

<script setup lang="ts">
  import props from "../../../example/tag/description/en-props.ts";
  import slots from "../../../example/tag/description/en-slots.ts";
    import events from "../../../example/tag/description/en-events.ts";
</script>

# Tag

Used for marking and selection.

##  Basic usage

Use the type attribute to define Tag's type. In addition, the color attribute can be used to set the background color of the Tag.

<demo src="../../../example/tag/base.vue"></demo>

##  Removable Tag

Setting the closable property can define whether a label can be removed. It accepts a Boolean. When a Tag is removed, a close event is triggered.

<demo src="../../../example/tag/closable.vue"></demo>

## Edit Dynamically

You can use the close event to add and remove tag dynamically.

<demo src="../../../example/tag/edit.vue"></demo>

##  Sizes

Tag component provides three additional sizes for you to choose among different scenarios.

Use attribute size to set additional sizes with large, default or small.

<demo src="../../../example/tag/size.vue"></demo>



##  Rounded

Tag can also be rounded like button.

<demo src="../../../example/tag/round.vue"></demo>

## Custom Colors

The color attribute can be used to define the color of a Tag.

<demo src="../../../example/tag/color.vue"></demo>


## Props

<table-block type="propsEn" :data="props"></table-block>

## Events

<table-block type="eventsEn" :data="events"></table-block>

## Slots

<table-block type="slotsEn" :data="slots"></table-block>
