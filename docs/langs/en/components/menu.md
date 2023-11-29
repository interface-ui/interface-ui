---
title: Menu
lang: en
---

# Menu

Menus display a list of choices on a temporary surface.

::: info Notice
The `Menu` is build with `Popover` and `List` components
:::

## Basic usage

The `anchor` help the menu to locate itself, and the `open` is to switch the on/off status of the menu.

<demo src="../../../example/menu/basic.vue" />

## Placement

The `placement` passed by prop will be consider first when locate the menu.

<demo src="../../../example/menu/placement.vue" />

::: warning Warning
The final placement **may not** be the same as the prop passed to the component. It will calculate the available space when open the menu.
:::

## Sublist

The `sublist` prop on the `List` used to locate the expanded sublist.

<demo src="../../../example/menu/sublist.vue" />

## Context menu

The `anchor` also can be the `MouseEvent`. This will help to build the custom context menu. (Right click to open)

<demo src="../../../example/menu/context.vue" />
