---
title: Dialog
lang: en
---

<script setup lang="ts">
  import props from "../../../example/dialog/description/en-props.ts";
  import slots from "../../../example/dialog/description/en-slots.ts";
</script>

# Dialog

The Dialog component displays a popup dialog that contains and facilitates user-related operations.

## Basic Usage

You need to use the ```v-model``` directive to control the display status of the Dialog. The Dialog is divided into three parts: ```title```, ```content```, and ```footer```. You can combine them as needed to display the content.

<demo src="../../../example/dialog/base.vue" />

## Close Button

You can use the  ```show-close``` prop to control the visibility of the close button in the Dialog.

<demo src="../../../example/dialog/close.vue" />


# Width and Position

 You can use the ```width``` and ```top``` props to control the width and distance from the top of the Dialog. The ```center``` prop can be used to center the Dialog.

<demo src="../../../example/dialog/size-positon.vue" />




##  Fullscreen Display

The ```fullscreen``` prop allows the Dialog to be displayed in fullscreen mode.
<demo src="../../../example/dialog/fullscreen.vue" />

## Closing on Overlay Click

The ```close-on-click-modal``` prop controls whether the Dialog can be closed by clicking on the overlay.

<demo src="../../../example/dialog/modal.vue" />

## Attributes

<table-block type="propsEn" :data="props" />
