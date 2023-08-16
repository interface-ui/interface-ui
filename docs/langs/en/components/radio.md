---
title: Radio
lang: en
---

<script setup lang="ts">
  import props from "../../../example/radio/description/en-props.ts";
  import events from "../../../example/radio/description/en-events.ts";
</script>


## Radio

Perform selection operations


# Basic usage

You only need to set the ```v-model``` binding variable, and ```value``` as the selected value.
<demo src="../../../example/radio/base.vue"></demo>


## Disabled state

Disable the radio box through the ```disabled``` property

<demo src="../../../example/radio/disabled.vue"></demo>


## Single box group

 Generate a set of vertically arranged radio boxes through ```option-list```

<demo src="../../../example/radio/option-list-horizontal.vue"></demo>

 Generate a set of vertically arranged radio boxes through ```horizontal = false```

<demo src="../../../example/radio/option-list.vue"></demo>

## Customize the color of buttons

Customize the color of the button through the ```color``` attribute

<demo src="../../../example/radio/color.vue"></demo>

<table-block type="propsZh" :data="props"></table-block>


## Events

<table-block type="eventsZh" :data="events"></table-block>
