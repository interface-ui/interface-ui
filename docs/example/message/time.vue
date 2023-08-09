<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div class="container">
    <FnButton @click="FnMessage({ message: 'Default delay 2s', type: 'success' })">
      Default delay 2s
    </FnButton>
    <FnButton @click="FnMessage({ message: 'Delay 3s', type: 'success', duration: 3000 })">
      Delay 3s
    </FnButton>
    <FnButton @click="FnMessage({ message: 'It keeps showing', type: 'success', duration: 0, closeBtn: true })">
      It keeps showing
    </FnButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
