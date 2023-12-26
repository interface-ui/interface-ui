<script lang="ts" setup>
import '@interface-ui/core/progress/src/index.less'
import { InProgress } from '@interface-ui/core'
import { ref, onUnmounted } from 'vue'

const progress = ref(0)
const timer = setInterval(() => {
  progress.value = progress.value >= 100 ? 0 : progress.value + 10
}, 800)

// const isLoading = ref(false)
// const onClick = () => {
//   isLoading.value = true
//   setTimeout(() => {
//     isLoading.value = false
//   }, 2000)
// }

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <!-- Circle -->
  <in-progress status="determinate" :value="progress" />
  <in-progress status="indeterminate" />

  <!-- Linear -->
  <in-progress variant="linear" status="determinate" :value="progress" />
  <in-progress variant="linear" status="indeterminate" />

  <!-- Color -->
  <in-progress color="error" status="indeterminate" />
  <in-progress
    :color="theme => theme.colors.cyan[400]"
    status="indeterminate"
  />
  <in-progress color="error" variant="linear" status="indeterminate" />
  <in-progress
    :color="theme => theme.colors.cyan[400]"
    variant="linear"
    status="indeterminate"
  />

  <!-- Interactive -->
  <!-- BUG: InCollapse needs to be optimized -->
  <!-- <in-button @click="onClick" :disabled="isLoading">
    <in-collapse>
      <in-progress
        v-if="isLoading"
        size="32"
        :color="isLoading ? 'primary' : 'inversePrimary'"
      />
    </in-collapse>
    Accept
  </in-button> -->
</template>
