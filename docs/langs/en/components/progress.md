---
title: Progress
lang: en
---

<script setup lang="ts">
  import props from "../../../example/progress/description/en-props.ts";
</script>

# Progress

Progress indicators show the status of a process in real time.


## Usage

There are two variants of the progress indicators: `circular` and `linear`

### Circular

Circular progress indicators display progress by animating along an invisible circular track in a clockwise direction. They can be applied directly to a surface, such as a button or card.
<demo src="../../../example/progress/circular.vue" preview="[2]" />

### Linear

Linear progress indicators display progress by animating along the length of a fixed, visible track. The behavior of the indicator is dependent on whether the progress of a process is known.
<demo src="../../../example/progress/linear.vue" preview="[2]" />

### Status

**Determinate indicators** display how long a process will take. They should be used when the process completion rate can be detected.

The `value` prop is used to set the percentage of the progress.
<demo src="../../../example/progress/determinate.vue" preview="[15, 16]" />

**Indeterminate indicators** express an unspecified amount of wait time. They should be used when progress isn’t detectable or if it’s not necessary to indicate how long an activity will take.
<demo src="../../../example/progress/indeterminate.vue" preview="[2, 3]" />

### Color

Use `color` to custom the progress
<demo src="../../../example/progress/color.vue" preview="[2-5]" />


## Attribute

<data-table type="props" lang="zh" :data="props" />
