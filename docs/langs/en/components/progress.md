---
title: Progress
lang: en
---

<script setup lang="ts">
  import props from "../../../example/progress/description/en-props.ts";
  import slots from "../../../example/progress/description/en-slots.ts";
</script>


# Progress

Show the current progress status of the operation.

## Basic usage

The ```percentage``` attribute of the Progress component controls the percentage of current progress.

<demo src="../../../example/progress/base.vue"></demo>


## status


The status of the progress bar can be controlled through the ```status``` attribute, with optional values of ```success``` , ```danger``` , and ```warning```
<demo src="../../../example/progress/status.vue"></demo>

## Display percentage indicator in the progress bar

You can control whether a percentage indicator is displayed in the progress bar through the ```text-insert``` attribute, and the ```heihgt``` attribute controls the height of the progress bar.
<demo src="../../../example/progress/inner.vue"></demo>


## Custom progress bar color

The color of the progress bar can be controlled through the ```background``` attribute, and the ```bar-color``` attribute controls the color of the percentage identification within the progress bar.
<demo src="../../../example/progress/color.vue"></demo>

## Circular progress bar

The ```type``` attribute controls whether the progress bar is a ring, and the ```stroke-width``` attribute controls the width of the ring progress bar.
<demo src="../../../example/progress/circle.vue"></demo>

The size of the ring progress bar can be controlled through the ```width``` property.
<demo src="../../../example/progress/circle-width.vue"></demo>

You can control the ring progress bar through the ```color``` attribute to activate the color of the background, and the ```background``` attribute controls the color of the unactivated background of the ring progress bar.
<demo src="../../../example/progress/circle-bg.vue"></demo>

You can customize the content displayed in the circular progress bar through the ```slots``` property.
<demo src="../../../example/progress/slots.vue"></demo>

## Animation progress bar

Use the ```intermediate``` property to set the uncertain progress, and ```duration``` to control the duration of the animation.

<demo src="../../../example/progress/intermediate.vue"></demo>


## Striped progress

The ```striped``` attribute gets the fringe progress bar. You can use the ```striped-flow``` attribute to make the stripe flow, and the ```duration``` attribute controls the speed of the flow.

<demo src="../../../example/progress/striped.vue"></demo>

 ## Attribute

<table-block type="propsZh" :data="props"></table-block>


## Slots

<table-block type="slotsZh" :data="slots"></table-block>
