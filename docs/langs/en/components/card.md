---
title: Card
lang: en
---

<script setup lang="ts">
  import props from "../../../example/card/description/en-props.ts";
</script>

# Card

Cards display content and actions about a single subject.

## Usage

### Basic cards

There are three variants of cards: elevated (default), filled, and outlined.

<demo src="../../../example/card/basic.vue" />

### Anatomy

A card can contain the `header`, `content`, `media`, and `action`.

<demo src="../../../example/card/anatomy-1.vue" />

The **header** describe the card content, it can container some other information instead of only the title.

Use the `avatar` and `action` slots to insert the elments.

<demo src="../../../example/card/anatomy-2.vue" />

The **content** and **media** (optional) is the main section of the card.

The **action** is the interaction part of the card.

### Primary action

Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior.

We have the `ActionArea` component to provide the foucs, hover, and click effect. Use is wrap the area you want the effect.

<demo src="../../../example/card/action.vue" />

Or you can just wrap the partial area to make it interactive.

<demo src="../../../example/card/action-partial.vue" />

## Creative

A card can be very creative and used in many situations.

<demo src="../../../example/card/creative.vue" />

## Attributes

<data-table type="props" lang="en" :data="props" />
