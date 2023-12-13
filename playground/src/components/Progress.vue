<script lang="ts" setup>
import '@fusion-ui-vue/components/src/progress/src/index.less'
import { FnProgress } from '@fusion-ui-vue/components'
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
  <fn-progress status="determinate" :value="progress" />
  <fn-progress status="indeterminate" />

  <!-- Linear -->
  <fn-progress variant="linear" status="determinate" :value="progress" />
  <fn-progress variant="linear" status="indeterminate" />

  <!-- Color -->
  <fn-progress color="error" status="indeterminate" />
  <fn-progress
    :color="theme => theme.colors.cyan[400]"
    status="indeterminate"
  />
  <fn-progress color="error" variant="linear" status="indeterminate" />
  <fn-progress
    :color="theme => theme.colors.cyan[400]"
    variant="linear"
    status="indeterminate"
  />

  <!-- Interactive -->
  <!-- BUG: FnCollapse needs to be optimized -->
  <!-- <fn-button @click="onClick" :disabled="isLoading">
    <fn-collapse>
      <fn-progress
        v-if="isLoading"
        size="32"
        :color="isLoading ? 'primary' : 'inversePrimary'"
      />
    </fn-collapse>
    Accept
  </fn-button> -->
</template>
