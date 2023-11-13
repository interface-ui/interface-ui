---
title: Breadcrumb
lang: en
---

<script setup lang="ts">
  import props from "../../../example/breadcrumb/description/en-props.ts";
  import itemProps from "../../../example/breadcrumb/description/en-props-item.ts";
</script>

# Breadcrumb

Displays the location of the current page, making it easier to browser back.

## Basic usage

This component has a String attribute separator, and it determines the separator. Its default value is `/`.
<demo src="../../../example/breadcrumb/base.vue" />

## Breadcrumb Attributes

<table-block type="propsEn" :data="props" />

## BreadcrumbItem Attributes

<table-block type="propsEn" :data="itemProps" />
