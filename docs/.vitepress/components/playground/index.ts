export const APP_CODE = `<script setup lang="ts">
  import App from './App.vue';
  import Component from './component.vue';
  import { ThemeProvider, createTheme } from '@interface-ui/theme'
  const uiTheme = createTheme()
</script>

<template>
  <theme-provider :theme="uiTheme">
    <Component />
 </theme-provider>
</template>`

export const COMPONENT_CODE = `<script setup lang="ts">
  import { ref } from 'vue'
  import {InButton} from '@interface-ui/core'
</script>

<template>
  <in-button variant="text">text</in-button>
  <in-button>filled</in-button>
  <in-button variant="outlined">outlined</in-button>
</template>`
