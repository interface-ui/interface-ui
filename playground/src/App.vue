<script setup lang="ts">
import { FnButton } from '@fusion-ui-vue/components'
import createTheme from '@fusion-ui-vue/theme'
import { toRaw } from 'vue'

const theme = createTheme()

console.log(
  `%c [Fusion UI] Tip: you can access the documentation 'theme' object directly in the console.`,
  'color: #3894ff; font-weight: bold; font-size: 14px;'
)
;(window as any).theme = toRaw(theme.value)

const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <!-- ------------------- Toggle between the light/dark mode ------------------- -->
  <header>
    <fn-button @click="changTheme">
      <!-- @vue-skip -->
      {{ theme.mode }}
    </fn-button>
  </header>
</template>
