<script setup lang="ts">
import { FnButton } from '@fusion-ui-vue/components'
import createTheme from '@fusion-ui-vue/theme'
import { toRaw } from 'vue'
// import Badge from './components/Badge.vue'
// import AvatarGroup from './components/AvatarGroup.vue'
// import ButtonGroup from './components/ButtonGroup.vue'
// import SwitchNew from './components/Switch.vue'
// import TextField from './components/TextField.vue'
// import Alert from './components/Alert.vue'
import SvgIcon from './components/SvgIcon.vue'

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
  <!-- <badge /> -->
  <!-- <avatar-group /> -->
  <!-- <button-group /> -->
  <!-- <switch-new /> -->
  <!-- <TextField /> -->
  <!-- <Alert /> -->
  <svg-icon />
</template>
