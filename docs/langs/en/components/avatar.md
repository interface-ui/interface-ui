---
title: Avatars
lang: en
---

<script setup lang="ts">
  import props from "../../../example/avatar/description/en-props.ts";
  import slots from "../../../example/avatar/description/en-slots.ts";
  import avatarGroupProps from "../../../example/avatar-group/description/en-props.ts";
  import avatarGroupSlots from "../../../example/avatar-group/description/en-slots.ts";
</script>

# Avatar

Avatar components can be used to represent people or objects, supporting image text or icons.


## Usage

### Basic avatar

<demo src="../../../example/avatar/basic.vue" preview="[2-5]" />


### Letter avatar

Generate letter avatars by passing text.
<demo src="../../../example/avatar/letter.vue" preview="[2-4]" />

Usually we use it to display users without avatars.
<demo src="../../../example/avatar/no-avatar.vue" />

### Size

Change the size of an avatar with the `size` prop. The default is `40`
<demo src="../../../example/avatar/size.vue" preview="[2-6]" />

### Icon avatar

Generate icon avatars by passing icons.
<demo src="../../../example/avatar/icon.vue" preview="[11-13]" />

### shape

Avatars are provided in three shapes: circle, `square`, and `rounded`.
<demo src="../../../example/avatar/variant.vue" preview="[12-16]" />


## Avatar Group

Use `AvatarGroup` to combine multiple avatars and the `max` attribute to limit the number of avatars displayed.

`AvatarGroup` accepts all the props of `Avatar` to help you control all the avatars.
<demo col src="../../../example/avatar/group.vue" preview="[24-28]" />


## Attributes

### Avatar Attributes

<data-table type="props" lang="zh" :data="props" />

### Avatar Group Attributes

<data-table type="props" lang="zh" :data="avatarGroupProps" />


## Slots

### Avatar Slots

<data-table type="slots" lang="zh" :data="slots" />

### Avatar Group Slots

<data-table type="slots" lang="zh" :data="avatarGroupSlots" />
