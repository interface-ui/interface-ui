---
title: List
lang: en
---

<script setup lang="ts">
  import props from "../../../example/list/description/en-props.ts";
</script>

# List

Lists are continuous, vertical indexes of text and images


## Usage

### Basic list

<demo src="../../../example/list/basic.vue" />

### Nested list

With the help of the [`<Collapse />`](./collapse.md) component, we can build the nested list.

Use the `level` prop on the `<List />` to control the indent of the nested list items. Or you can use `indent` on `<ListItem />` to handle the specific item.
<demo src="../../../example/list/nested.vue" />

### Indent

Using the `indent` prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.
<demo src="../../../example/list/indent.vue" />

### Text and unselectable list

Set `selectable=false` to make the items unselectable. Also, you can set it for a specific `<ListItem />`.

The `<HeadlineText />` component helps to display the headline and supporting text.
<demo src="../../../example/list/text-unselectable.vue" />

When displaying three lines or more, the avatar is not aligned at the top. Following the Material Design guidelines, you should set the `alignItems="flex-start"` prop to align the avatar at the top.

### Highlight

Set `highlight=true` on specific items to make it have a background color.

The `highlight-color` prop (default is `secondaryContainer`) can be used to customize the highlight background color.

Set it on the `<List />` to apply to all the items or on the `<ListItem />` to control the specific one.
<demo src="../../../example/list/highlight.vue" preview="[22-28]" />

### List controls

The list can be so flexible that it is easy to implement the list controls.
<demo src="../../../example/list/list-controls.vue" />


## Attributes

<data-table type="props" lang="en" :data="props" />
