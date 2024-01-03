---
title: Breadcrumb 面包屑
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/breadcrumb/description/zh-props.ts";
</script>

# Breadcrumb 面包屑

面包屑是一个链接列表，用于可视化网站层次结构中页面的位置，它允许导航到任何祖先页面。

## 基本用法

<demo src="../../../example/breadcrumb/basic.vue" preview="[2-6]" />

## 自定义分隔符

分隔符可以接受字符串或组件（SVG 图标）。

<demo src="../../../example/breadcrumb/separator.vue" preview="[6-16]" />

## 下划线

设置 `underline` 属性以为所有链接设置样式。您还可以为特定链接设置它。

<demo src="../../../example/breadcrumb/underline.vue" preview="[2-18]" />

## 折叠面包屑

`max` 属性用于控制最大显示数量。它可以接受字符串和数字。

<demo src="../../../example/breadcrumb/collapsed.vue" preview="[2-6]" />

## 颜色

使用 `color` 设置链接的颜色。

<demo src="../../../example/breadcrumb/color.vue" preview="[2-12]" />

## 带图标的链接

<demo src="../../../example/breadcrumb/icon.vue"  preview="[6-10]" />

## 辅助功能

(WAI-ARIA: https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

请务必在面包屑组件上添加 `aria-label` 描述。

此组件的可访问性依赖于以下因素：

- 链接集合使用有序列表（`<ol>` 元素）进行结构化。
- 为了防止屏幕阅读器在链接之间的可视分隔符上进行公告，它们被隐藏为 `aria-hidden`。
- 使用带有 `aria-label` 标签的 nav 元素标识结构为面包屑路径，并将其作为导航地标，以便轻松定位。

## 属性

<data-table type="props" lang="zh" :data="props" />
