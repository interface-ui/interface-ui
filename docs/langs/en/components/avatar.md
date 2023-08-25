---
title: Avatars
lang: en
---

<script setup lang="ts">
  import props from "../../../example/avatar/description/en-props.ts";
  import events from "../../../example/avatar/description/en-events.ts";
  import slots from "../../../example/avatar/description/en-slots.ts";
</script>

## Avatar

Avatar components can be used to represent people or objects, supporting image text or icons.

# Basic usage

<demo src="../../../example/avatar/base.vue"></demo>

## Letter avatar

Generate letter avatars by passing text.
<demo src="../../../example/avatar/letter.vue"></demo>

Usually we use it to display users without avatars.
<demo src="../../../example/avatar/no-avatar.vue"></demo>

## 尺寸

We provide three sizes of avatars, namely ```small``` , ````default```` and ```large```. You can also use ```height``` and ```width``` to customize the size of the avatar.
<demo src="../../../example/avatar/size.vue"></demo>

## 图标头像

Generate icon avatars by passing icons.
<demo src="../../../example/avatar/icon.vue"></demo>

## 形状

Avatars in three shapes are provided, namely ```circle```, ```square``` and ```rounded```.
<demo src="../../../example/avatar/shape.vue"></demo>

## Avatar Group

To be developed...

## Attributes
<table-block type="propsZh" :data="props"></table-block>


## Events
<table-block type="eventsZh" :data="events"></table-block>


## Slots
<table-block type="slotsZh" :data="slots"></table-block>
