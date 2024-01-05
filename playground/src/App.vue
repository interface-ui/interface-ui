<script setup lang="ts">
import { toRaw, watch, h, VNode } from 'vue'
import { ThemeProvider, createTheme } from '@interface-ui/theme'
import { InButton, InIconButton, InMessage } from '@interface-ui/core'
import Delete from '@interface-ui/icons/DeleteFilled'
import Verified from '@interface-ui/icons/VerifiedRound'
import Home from '@interface-ui/icons/HomeFilled'
import DarkMode from '@interface-ui/icons/DarkModeFilled'
import Sunny from '@interface-ui/icons/SunnyFilled'
import { RouterView } from 'vue-router'

const theme = createTheme() // create a theme instance

console.log(
  `%c [Interface UI] Tip: you can access the documentation 'theme' object directly in the console.`,
  'color: #3894ff; font-weight: bold; font-size: 14px;',
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
    customIcon: Verified,
    action: h(InIconButton, { color: 'primary' }, () => h(Delete)),
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
      <in-button @click="$router.replace('/')">
        <Home leading /> Home
      </in-button>
      <in-button @click="changTheme">
        <DarkMode leading v-show="theme.mode == 'dark'" />
        <Sunny leading v-show="theme.mode == 'light'" />
        {{ theme.mode }}
      </in-button>
      <in-button @click="onOpenMessage"> open message </in-button>
    </header>

    <router-view />
  </theme-provider>
</template>
