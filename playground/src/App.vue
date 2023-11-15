<script setup lang="ts">
import '@fusion-ui-vue/components/modal/src/index.less' // 开发调试的样式
import { ThemeProvider } from '@fusion-ui-vue/theme'
import { FnButton, FnModal } from '@fusion-ui-vue/components'
import createTheme from '@fusion-ui-vue/theme'
// import Badge from './components/Badge.vue'
// import AvatarGroup from './components/AvatarGroup.vue'
// import ButtonGroup from './components/ButtonGroup.vue'
// import SwitchNew from './components/Switch.vue'
// import TextField from './components/TextField.vue'
// import Alert from './components/Alert.vue'
// import SvgIcon from './components/SvgIcon.vue'
// import ButtonT from './components/Button.vue'
// import Checkbox from './components/Checkbox.vue'
// import LinkT from './components/Link.vue'
// import FBA from './components/FBA.vue'
// import Card from './components/Card.vue'
import { toRaw, watch, ref } from 'vue'

const theme = createTheme()
const open = ref(false)

console.log(
  `%c [Fusion UI] Tip: you can access the documentation 'theme' object directly in the console.`,
  'color: #3894ff; font-weight: bold; font-size: 14px;'
)

const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}
watch(theme, () => ((window as any).theme = toRaw(theme.value)), {
  immediate: true,
})
</script>

<template>
  <theme-provider :theme="theme">
    <!-- ------------------- Toggle between the light/dark mode ------------------- -->
    <header>
      <fn-button @click="changTheme">
        <!-- @vue-skip -->
        {{ theme.mode }}
      </fn-button>
      <fn-button @click="open = !open"> open modal </fn-button>
    </header>
    <!-- <badge /> -->
    <!-- <avatar-group /> -->
    <!-- <button-group /> -->
    <!-- <switch-new /> -->
    <!-- <TextField /> -->
    <!-- <Alert /> -->
    <!-- <svg-icon /> -->
    <!-- <button-t /> -->
    <!-- <checkbox /> -->
    <!-- <link-t /> -->
    <!-- <FBA /> -->
    <!-- <Card /> -->
    <fn-modal v-model="open" />
  </theme-provider>
</template>
