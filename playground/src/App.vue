<script setup lang="ts">
import { ref, toRaw, watch, h, VNode } from 'vue'
import { HomeFilled, DarkModeFilled, SunnyFilled } from 'fusion-ui-iconify'
import { ThemeProvider } from '@interface-ui/theme'
import { InButton, InIconButton, InMessage } from '@interface-ui/components'
import { DeleteFilled, VerifiedRound } from 'fusion-ui-iconify'
import { RouterView } from 'vue-router'

import createTheme from '@interface-ui/theme'

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
  new InMessage({
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
    action: h(InIconButton, { color: 'primary' }, () => h(DeleteFilled)),
    /**
     * if the actionEvent is not set
     * the default action event is to close the message
     */
    actionEvent: (node: VNode, remove: (c: string | number) => void) => {
      new InMessage().error({ content: 'error' })
      remove((node as any).id)
    },
  })
}
</script>

<template>
  <theme-provider :theme="theme">
    <header>
      <in-button @click="$router.replace('/')"><HomeFilled /> Home </in-button>
      <in-button @click="changTheme">
        <DarkModeFilled v-show="theme.mode == 'dark'" />
        <SunnyFilled v-show="theme.mode == 'light'" />
        {{ theme.mode }}
      </in-button>
      <in-button @click="open = !open"> open modal </in-button>
      <in-button @click="onOpenMessage"> open message </in-button>
    </header>

    <router-view />
  </theme-provider>
</template>
