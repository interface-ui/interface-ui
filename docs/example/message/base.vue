<script lang="ts" setup>
import FnMessage from '../../../packages/fusion-ui/components/message/index'
</script>

<template>
  <div class="container">
    <FnButton @click="FnMessage({ message: 'this is a message.' })">
      Show message
    </FnButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
