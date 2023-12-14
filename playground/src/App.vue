<script setup lang="ts">
import { ref, toRaw, watch, h, VNode } from 'vue'
import { HomeFilled, DarkModeFilled, SunnyFilled } from 'fusion-ui-iconify'
import { ThemeProvider } from '@fusion-ui-vue/theme'
import { FnButton, FnIconButton, FnMessage } from '@fusion-ui-vue/components'
import { DeleteFilled, VerifiedRound } from 'fusion-ui-iconify'
import { RouterView } from 'vue-router'

import createTheme from '@fusion-ui-vue/theme'

const theme = createTheme() // create a theme instance
const open = ref(false)

console.log(
  `%c [Interface UI] Tip: you can access the documentation 'theme' object directly in the console.`,
  'color: #3894ff; font-weight: bold; font-size: 14px;'
)

const changTheme = () => {
  theme.value.toggleMode()
}

watch(theme, () => ((window as any).theme = toRaw(theme.value)), {
  immediate: true,
})

const onOpenMessage = () => {
  new FnMessage({
    /**
     * custom default props
     * Can be override by the props passed in the method
     */
    severity: 'success',
    variant: 'outlined',
    placement: { x: 'center' },
  }).push({
    content: 'this is a info message',
    customIcon: VerifiedRound,
    action: h(FnIconButton, { color: 'primary' }, () => h(DeleteFilled)),
    /**
     * if the actionEvent is not set
     * the default action event is to close the message
     */
    actionEvent: (node: VNode, remove: (c: string | number) => void) => {
      new FnMessage().error({ content: 'error' })
      remove((node as any).id)
    },
  })
}
</script>

<template>
  <theme-provider :theme="theme">
    <header>
      <fn-button @click="$router.replace('/')"><HomeFilled /> Home </fn-button>
      <fn-button @click="changTheme">
        <DarkModeFilled v-show="theme.mode == 'dark'" />
        <SunnyFilled v-show="theme.mode == 'light'" />
        {{ theme.mode }}
      </fn-button>
      <fn-button @click="open = !open"> open modal </fn-button>
      <fn-button @click="onOpenMessage"> open message </fn-button>
    </header>

    <router-view />
  </theme-provider>
</template>
