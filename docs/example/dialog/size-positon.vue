<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
</script>

<template>
  <in-button @click="dialogVisible = true"> size & positon </in-button>
  <in-dialog v-model="dialogVisible" title="Tips" center>
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <in-button variant="text" size="small" @click="dialogVisible = false"
          >Cancel</in-button
        >
        <in-button variant="text" size="small" @click="dialogVisible = false">
          Confirm
        </in-button></span
      >
    </template>
  </in-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
