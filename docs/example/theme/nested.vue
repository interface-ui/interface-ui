<script lang="ts" setup>
import { ref } from 'vue'
import createTheme, { ThemeProvider } from '@fusion-ui-vue/theme'
import { FnCheckbox } from 'fusion-ui-vue'
const checked = ref(true)
const theme1 = createTheme('#2196F3', { target: 'host' })
const theme2 = createTheme('#4CAF50', { target: 'host' })
</script>

<template>
  <fn-checkbox v-model="checked" />
  <theme-provider :theme="theme1" component="span" flex gap-5>
    <fn-checkbox v-model="checked" />
    <theme-provider :theme="theme2" component="span">
      <fn-checkbox v-model="checked" />
    </theme-provider>
  </theme-provider>
</template>
