<script lang="ts" setup>
import '@fusion-ui-vue/components/src/progress/src/index.less'
import { FnProgress } from '@fusion-ui-vue/components'
import { ref, onUnmounted } from 'vue'

const progress = ref(0)
const timer = setInterval(() => {
  progress.value = progress.value >= 100 ? 0 : progress.value + 10
}, 800)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="content">
    <fn-progress status="determinate" :value="progress" />
    <fn-progress status="indeterminate" />
  </div>
  <fn-progress variant="linear" status="determinate" :value="progress" />
  <fn-progress variant="linear" status="indeterminate" />
</template>
