export const APP_CODE = `<script setup lang="ts">
  import App from './App.vue';
  import Component from './component.vue';
  import { ThemeProvider, createTheme } from '@interface-ui/theme'
  const theme = createTheme()
  import {setupInterfaceUi } from './mainFile.js';
  setupInterfaceUi()
</script>

<template>
  <theme-provider :theme="theme">
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
export const COMPONENT_CODE2 = `
import InterfaceUI from '@interface-ui/core';
import { getCurrentInstance } from 'vue';
export function setupInterfaceUi() {
    const instance = getCurrentInstance()
    instance.appContext.app.use(InterfaceUI);
}
`
