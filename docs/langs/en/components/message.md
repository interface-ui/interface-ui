---
title: Message
lang: en
---

<script setup lang="ts">
  import props from "../../../example/message/description/en-props.ts";
  import slots from "../../../example/message/description/en-slots.ts";
</script>

# Message

It is often used for feedback prompts after active operation. When the mouse hovers, the message does not disappear. After the mouse is moved out, the countdown begins, and the message automatically disappears after the countdown.

## Basic Usage

Call the ```FnMessage``` method and pass in the ```message``` parameter.
<demo src="../../../example/message/base.vue"></demo>

## status

It is used to display "success, warning, message, danger (error)" operation feedback.

<demo src="../../../example/message/type.vue"></demo>

## Closing time

The delay of automatic shutdown is in milliseconds. If you don't close it, you can write 0.

<demo src="../../../example/message/time.vue"></demo>

## Manually close

Show the close button

<demo src="../../../example/message/close.vue"></demo>

## Close the logo

<demo src="../../../example/message/icon.vue"></demo>

## Attributes

<table-block type="propsEn" :data="props"></table-block>
