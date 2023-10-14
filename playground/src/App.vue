<script setup lang="ts">
import { FnButton, FnRadio, FnTypography } from '@fusion-ui-vue/components'
import { createTheme } from '@fusion-ui-vue/theme'
import { ref } from 'vue'

const theme = createTheme()
console.log(theme.value)

const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}
const checked = ref(1)
</script>

<template>
  <!-- -------------------浅色/深色模式切换------------------- -->
  <header>
    <fn-button @click="changTheme">
      <!-- @vue-skip -->
      {{ theme.mode }}
    </fn-button>
  </header>

  <!-- -------------------新组建开发调试------------------- -->
  <div class="content">
    {{ checked }}
    <fn-form-label
      v-model="checked"
      label="One"
      :value="1"
      :control="FnRadio"
    />
  </div>
  <div>
    <fn-typography variant="h1">h1</fn-typography>
    <fn-typography variant="h2">h2</fn-typography>
    <fn-typography variant="h3">h3</fn-typography>
    <fn-typography variant="h4">h4</fn-typography>
    <fn-typography variant="h5">h5</fn-typography>
    <fn-typography variant="h6">h6</fn-typography>
    <fn-typography variant="title.small">title.small</fn-typography>
    <fn-typography variant="title.medium">title.medium</fn-typography>
    <fn-typography variant="title.large">title.large</fn-typography>
    <fn-typography variant="body.small">body.small</fn-typography>
    <fn-typography variant="body.medium">body.medium</fn-typography>
    <fn-typography variant="body.large">body.large</fn-typography>
    <fn-typography variant="label.small">label.small</fn-typography>
    <fn-typography variant="label.medium">label.medium</fn-typography>
    <fn-typography variant="label.large">label.large</fn-typography>
  </div>
</template>
