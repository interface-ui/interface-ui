<script lang="ts" setup>
import { FnButton } from 'fusion-ui-vue'
</script>

<template>
  <fn-button @click="FnMessage({ message: 'Show Close Button', type: 'success', duration: 0, closeBtn: true })">
    Show Close Button
  </fn-button>
</template>
