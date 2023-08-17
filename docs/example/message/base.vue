<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
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
