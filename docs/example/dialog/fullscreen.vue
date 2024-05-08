<script setup lang="ts">
import { ref } from 'vue'
const dialogVisible = ref(false)
</script>

<template>
  <in-button @click="dialogVisible = true"> fullscreen </in-button>
  <in-dialog :open="dialogVisible" variant="full-screen">
    <in-dialog-header>Dialog Header</in-dialog-header>
    <in-dialog-content>
      Tempor deserunt consequat Lorem veniam reprehenderit nulla. Eu anim ipsum
      incididunt commodo do nisi eu cupidatat non. Ullamco nulla aliqua do
      mollit. Cupidatat excepteur tempor excepteur ea. Excepteur deserunt elit
      proident id do consectetur et irure esse proident nulla sint in. Aute sit
      id amet incididunt velit anim exercitation exercitation amet est.
    </in-dialog-content>
    <in-dialog-action>
      <in-button variant="text" @click="dialogVisible = false">
        Cancel
      </in-button>
      <in-button @click="dialogVisible = false"> Submit </in-button>
    </in-dialog-action>
  </in-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
