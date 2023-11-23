---
title: List
lang: en
---

# List

Lists are continuous, vertical indexes of text and images

## Basic

<demo src="../../../example/list/basic.vue" />

## Nested list

With the help of `Collapse` component, we can build the nested list.

Use `level` prop on the `List` to control the indent of the nested list items. Or you can use `indent` on `ListItem` to control the specific item.

<demo src="../../../example/list/nested.vue" preview="[72-86]" />

## Indent

Use `indent` prop enables a list item that does not have a leading icon or avatar to align correctly with items that do.

<demo src="../../../example/list/indent.vue" />

## Text and unselectable list

Set `selectable=false` to make the items it unselectable. Also, you can set for specific `ListItem`.

The `ListItemText` component help to display the headline and supporting text.

<demo src="../../../example/list/text-unselectable.vue" />

When displaying three lines or more, the avatar is not aligned at the top. You should set the `alignItems="flex-start"` prop to align the avatar at the top, following the Material Design guidelines.

## Highlight

Set `highlight=true` on specific items to make it hava a background color.

The `highlight-color` prop (default is `secondaryContainer`) can be used to custom the highlight background color.

Set it on the `List` to apply to all the items, or on the `ListItem` to control the specific one.

<demo src="../../../example/list/highlight.vue" preview="[22-28]" />

## List controls

The list can be so much flexible to implement the list controls.

<demo src="../../../example/list/list-controls.vue" />
