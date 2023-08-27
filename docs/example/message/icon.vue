<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue/components'
</script>

<template>
  <FnButton @click="FnMessage({ message: 'Close logo', showIcon: false })">
    Close logo
  </FnButton>
</template>
