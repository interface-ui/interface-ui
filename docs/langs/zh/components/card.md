---
title: Card 卡片
lang: zh
---

<script setup lang="ts">
  import props from "../../../example/card/description/zh-props.ts";
</script>

# Card 卡片

卡片显示关于单个主题的内容和操作。

## 用法

### 基本卡片

卡片有三种变体：elevated（默认）、filled 和 outlined。

<demo src="../../../example/card/basic.vue" />

### 结构

卡片可以包含 `header`、`content`、`media` 和 `action`。

<demo src="../../../example/card/anatomy-1.vue" />

**Header** 描述了卡片的内容，除了标题之外，它还可以包含其他信息。

使用 `avatar` 和 `action` 插槽来插入元素。

<demo src="../../../example/card/anatomy-2.vue" />

**Content** 和 **Media**（可选）是卡片的主要部分。

**Action** 是卡片的交互部分。

### 交互

通常，卡片允许用户与其整个表面进行交互，以触发其主要操作，无论是展开、链接到另一个屏幕还是其他行为。

我们有 `ActionArea` 组件来提供 focus、hover 和 click 效果。将其包装在您希望产生效果的区域。

<demo src="../../../example/card/action.vue" />

或者您可以只包装部分区域以使其具有交互性。

<demo src="../../../example/card/action-partial.vue" />

## 创意

卡片可以非常有创意，并在许多情况下使用。

<demo src="../../../example/card/creative.vue" />

## 属性

<data-table type="props" lang="zh" :data="props" />
