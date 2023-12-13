<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const progress = ref(0)
const timer = setInterval(() => {
  progress.value = progress.value >= 100 ? 0 : progress.value + 10
}, 800)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <fn-progress :value="progress" status="determinate" />
  <fn-progress variant="linear" :value="progress" status="determinate" />
</template>
