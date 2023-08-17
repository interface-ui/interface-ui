<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <FnButton @click="FnMessage({ message: 'Close logo', showIcon: false })">
    Close logo
  </FnButton>
</template>
