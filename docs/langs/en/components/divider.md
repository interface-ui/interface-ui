---
title: Divider
lang: en
---

<script setup lang="ts">
  import props from "../../../example/divider/description/en-props.ts";
</script>

# Divider

Dividers are thin lines that group content in lists or other containers

## Usage

### Basic divider

The divider renders as a `<hr>` by default.
<demo src="../../../example/divider/basic.vue" preview="[2]" />

Use the `component` prop to render it to another element. (e.g. should renders as `<li>` in the list.)
<demo src="../../../example/divider/list.vue" preview="[7]" />

### Full-width dividers

Use full-width dividers to separate larger sections of unrelated content. They can be used directly on a surface or inside components like cards or lists.

Full-width dividers can also separate interactive areas from non-interactive areas.

They are used to group visual elements and indicate when elements are related to each other from an interaction perspective.
<demo src="../../../example/divider/full-width.vue" preview="[10]" />

### Inset dividers

Use inset dividers to separate related content within a section.

Inset dividers are equally indented from both sides of the screen by default.
<demo src="../../../example/divider/inset.vue" preview="[23]" />

### With text

You can add the content to the divider when the orientation is horizontal.
<demo src="../../../example/divider/text.vue" preview="[8, 14, 20]" />

### Orientation

The default orientation is horizontal; set `orientation=vertical` to use the vertical divider.
<demo src="../../../example/divider/orientation.vue" />


## Attributes

<data-table type="props" lang="en" :data="props" />
