---
title: Message
lang: en
---

<script setup lang="ts">
  import props from "../../../example/message/description/en-props.ts";
  import slots from "../../../example/message/description/en-slots.ts";
</script>

# Message

`❗️Updating... `

::: warning
Please note that calling `new InMessage` multiple times will only create `one instance`.
:::
It is often used for feedback prompts after active operation. When the mouse hovers, the message does not disappear. After the mouse is moved out, the countdown begins, and the message automatically disappears after the countdown.

The attribute of [`Alert`](./alert.md) can be used for Message, providing a more flexible way to use it.

## Basic Usage

Call the `InMessage` method and pass in the `message` parameter.
<demo src="../../../example/message/basic.vue" />

## severity

It is used to display `success`, `error`, `warning`, `info` operation feedback.

<demo src="../../../example/message/severity.vue" />

## Placement `🔜 Coming soon`

`placement` property is used to set the location of the message prompt

<!-- <demo src="../../../example/message/placement.vue" /> -->

## CustomIcon

The `customIcon` attribute is used to customize the icon.

<demo src="../../../example/message/icon.vue" />

## Closing time

`Duration` The delay for automatic closing of the attribute, in milliseconds, defaults to 2000.

<demo src="../../../example/message/time.vue" />

## Manual shutdown

The `action` attribute can be used to customize the close button for manual closure, and `actionEvent` is the callback event for the close button.

<demo src="../../../example/message/action.vue" />

## Attributes

The properties of the [`Alert`](./alert.md) component are applicable to the Message component; no further details are provided here.

<data-table type="props" lang="en" :data="props" />
