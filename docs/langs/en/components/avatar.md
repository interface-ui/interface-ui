---
title: Avatars
lang: en
---

<script setup lang="ts">
  import props from "../../../example/avatar/description/en-props.ts";
  import events from "../../../example/avatar/description/en-events.ts";
  import slots from "../../../example/avatar/description/en-slots.ts";
</script>

# Avatar

Avatar components can be used to represent people or objects, supporting image text or icons.

## Basic

<demo src="../../../example/avatar/basic.vue" />

## Letter avatar

Generate letter avatars by passing text.

<demo src="../../../example/avatar/letter.vue" />

Usually we use it to display users without avatars.

<demo src="../../../example/avatar/no-avatar.vue" />

## Size

Change the size of avatar with `size` prop. The default is `40`

<demo src="../../../example/avatar/size.vue" />

## Icon avatar

Generate icon avatars by passing icons.

<demo src="../../../example/avatar/icon.vue" />

## shape

Avatars in three shapes are provided, namely `circle`, `square` and `rounded`.

<demo src="../../../example/avatar/variant.vue" />


## Avatar Group

Use `AvatarGroup` to combine multiple avatars together, and the `max` attribute to limit the number of avatars displayed.

`AvatarGroup` accept all the props of `Avatar` to help you control the all the avatars.

<demo src="../../../example/avatar/group.vue" />


## Attributes
<table-block type="propsZh" :data="props" />


## Events
<table-block type="eventsZh" :data="events" />


## Slots
<table-block type="slotsZh" :data="slots" />
