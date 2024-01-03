---
title: Breadcrumb
lang: en
---

<script setup lang="ts">
  import props from "../../../example/breadcrumb/description/en-props.ts";
</script>

# Breadcrumb

A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors.

## Basic usage

<demo src="../../../example/breadcrumb/basic.vue" preview="[2-6]" />

## Custom separator

The separator accept the string or component (SVG icon).

<demo src="../../../example/breadcrumb/separator.vue" preview="[8-18]" />

## Underline

Set the `underline` prop to style all the links. Also you can set it for specific link.

<demo src="../../../example/breadcrumb/underline.vue" preview="[2-19]" />

## Collapsed breadcrumb

The `max` prop used to control the max number displayed. It accept both the `string` and `number`

<demo src="../../../example/breadcrumb/collapsed.vue" preview="[2-6]" />

## Color

Use `color` to set the color of the link.

<demo src="../../../example/breadcrumb/color.vue" preview="[2-12]" />

## Link with icon

<demo src="../../../example/breadcrumb/icon.vue" preview="[8-12]" />

## Accessibility

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

Be sure to add a `aria-label` description on the Breadcrumbs component.

The accessibility of this component relies on:

* The set of links is structured using an ordered list (`<ol>` element).
* To prevent screen reader announcement of the visual separators between links, they are hidden with `aria-hidden`.
* A nav element labeled with `aria-label` identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate.

## Attributes

<data-table type="props" lang="en" :data="props" />
