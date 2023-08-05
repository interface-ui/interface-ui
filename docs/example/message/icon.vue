<script lang="ts" setup>
import FnMessage from '../../../packages/fusion-ui/components/message/index'
</script>

<template>
  <FnButton @click="FnMessage({ message: 'Close logo', showIcon: false })">
    Close logo
  </FnButton>
</template>
