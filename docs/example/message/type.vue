<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div class="container">
    <FnButton @click="FnMessage({ message: 'Default' })">
      Default
    </FnButton>
    <FnButton state="success" @click="FnMessage({ message: 'Congrats, this is a success message.', type: 'success' })">
      Success
    </FnButton>
    <FnButton state="warning" @click="FnMessage({ message: 'Warning, this is a warning message.', type: 'warning' })">
      Warning
    </FnButton>
    <FnButton state="danger" @click="FnMessage({ message: 'Oops, this is a error message.', type: 'danger' })">
      Error
    </FnButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
