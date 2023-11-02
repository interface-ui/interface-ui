<script lang="ts" setup>
// import {
//   AccessibilityFilled,
//   AutorenewFilled,
//   BookFilled,
// } from 'fusion-ui-iconify'
import * as pkg from 'fusion-ui-iconify'
const { BookFilled, AccessibilityFilled, AutorenewFilled } = pkg
</script>

<template>
  <fn-avatar>
    <book-filled />
  </fn-avatar>
  <fn-avatar background-color="#dc3964" color="white">
    <accessibility-filled />
  </fn-avatar>
  <fn-avatar background-color="#60ae57" color="white">
    <autorenew-filled />
  </fn-avatar>
</template>
