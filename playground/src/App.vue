<script setup lang="ts">
import { FnButton } from '@fusion-ui/components'
import { createTheme } from '@fusion-ui/theme'
import Child from './Child.vue'

const theme = createTheme()

const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}
// const checked = ref(false)
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      {{ theme.mode }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->
  <div class="content">
    <fn-button :color="theme => theme.palette.error">button</fn-button>
    <fn-button color="error">button</fn-button>
    <child />
  </div>
</template>
