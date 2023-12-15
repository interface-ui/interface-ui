<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
const { AccessibilityFilled, AutorenewFilled, BookFilled } = pkg
// import {
//   AccessibilityFilled,
//   AutorenewFilled,
//   BookFilled,
// } from 'fusion-ui-iconify'
</script>

<template>
  <in-avatar>
    <book-filled />
  </in-avatar>
  <in-avatar background="#dc3964" color="white">
    <accessibility-filled />
  </in-avatar>
  <in-avatar background="#60ae57" color="white">
    <autorenew-filled />
  </in-avatar>
</template>
