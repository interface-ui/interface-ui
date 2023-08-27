<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue/components'
</script>

<template>
  <FnButton @click="FnMessage({ message: 'Show Close Button', type: 'success', duration: 0, closeBtn: true })">
    Show Close Button
  </FnButton>
</template>
