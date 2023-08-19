---
title: Alert
lang: en
---

<script setup lang="ts">
  import props from "../../../example/alert/description/en-props.ts";
  import events from "../../../example/alert/description/en-events.ts";
  import slots from "../../../example/alert/description/en-slots.ts";
</script>


## Alert

Used to display important prompt information on the page.

# Basic usage

The ```Alert``` component provides four types, specified by the ```type``` attribute, with a default value of ```info```
<demo src="../../../example/alert/base.vue"></demo>


## Customize the close button

The ```close``` attribute is used to define whether the close button is displayed, and the ```closeArea``` slot is used to customize the content of the close button.

The ```close``` event will be triggered when the Alert component is closed.

<demo src="../../../example/alert/close.vue"></demo>

## Text centered

Use the ```center``` attribute to center the text horizontally.
<demo src="../../../example/alert/center.vue"></demo>

## Title

Use the ```title``` attribute to add a title to the description.
<demo src="../../../example/alert/title.vue"></demo>

## Front fixed content

Use the ```fixedArea``` slot to add front fixed content to the description.
<demo src="../../../example/alert/flex-tip.vue"></demo>

## Scrollable

By default, scrolling to the left is enabled using the ```scrollable``` attribute, and the duration of the scrollbar can also be defined through the ```duration``` attribute.
<demo src="../../../example/alert/scrollable.vue"></demo>

## Attribute
<table-block type="propsZh" :data="props"></table-block>


## Events
<table-block type="eventsZh" :data="events"></table-block>


## Slots
<table-block type="slotsZh" :data="slots"></table-block>
