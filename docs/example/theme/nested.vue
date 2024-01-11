<script lang="ts" setup>
import { ref } from 'vue'
import { ThemeProvider, createTheme, useTheme } from '@interface-ui/theme'
import { InCheckbox } from '@interface-ui/core'
const checked = ref(true)
const theme = useTheme()
const theme1 = createTheme('#2196F3', {
  target: 'host',
  config: { mode: theme.value.mode },
})
const theme2 = createTheme('#4CAF50', {
  target: 'host',
  config: { mode: theme.value.mode },
})
</script>

<template>
  <in-checkbox v-model="checked" />
  <theme-provider :theme="theme1" component="span" flex gap-5>
    <in-checkbox v-model="checked" />
    <theme-provider :theme="theme2" component="span">
      <in-checkbox v-model="checked" />
    </theme-provider>
  </theme-provider>
</template>
