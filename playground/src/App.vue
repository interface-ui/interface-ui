<script setup lang="ts">
import { computed, ref, toRaw, watch, h } from 'vue'
import { HomeFilled, DarkModeFilled, SunnyFilled } from 'fusion-ui-iconify'
import { FnChip as aaa } from '@fusion-ui-vue/components'
import '@fusion-ui-vue/components/src/modal/src/index.less' // 开发调试的样式
import '@fusion-ui-vue/components/src/collapse/src/index.less' // 开发调试的样式
import { ThemeProvider } from '@fusion-ui-vue/theme'
import { FnButton, FnIconButton, FnMessage } from '@fusion-ui-vue/components'
import { DeleteFilled, VerifiedRound } from 'fusion-ui-iconify'
import createTheme from '@fusion-ui-vue/theme'
import Badge from './components/Badge.vue'
import AvatarGroup from './components/AvatarGroup.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import SwitchNew from './components/Switch.vue'
import TextField from './components/TextField.vue'
import Alert from './components/Alert.vue'
import SvgIcon from './components/SvgIcon.vue'
import Button from './components/Button.vue'
import Checkbox from './components/Checkbox.vue'
import LinkT from './components/Link.vue'
import FBA from './components/FBA.vue'
import Menu from './components/Menu.vue'
import Card from './components/Card.vue'
import Popover from './components/Popover.vue'
import Divider from './components/Divider.vue'
import List from './components/List.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Chip from './components/Chip.vue'

const theme = createTheme() // create a theme instance
const open = ref(false)

// components
const components = [
  { name: 'Badge', component: Badge },
  { name: 'Menu', component: Menu },
  { name: 'AvatarGroup', component: AvatarGroup },
  { name: 'ButtonGroup', component: ButtonGroup },
  { name: 'SwitchNew', component: SwitchNew },
  { name: 'TextField', component: TextField },
  { name: 'Alert', component: Alert },
  { name: 'SvgIcon', component: SvgIcon },
  { name: 'Button', component: Button },
  { name: 'Checkbox', component: Checkbox },
  { name: 'Link', component: LinkT },
  { name: 'FBA', component: FBA },
  { name: 'Card', component: Card },
  { name: 'Popover', component: Popover },
  { name: 'Divider', component: Divider },
  { name: 'List', component: List },
  { name: 'Breadcrumb', component: Breadcrumb },
  { name: 'Chip', component: Chip },
]

// current component
const currnetName = ref(localStorage.getItem('currnetName') || '')

// current component
const name = computed(() => {
  const component = components.find(item => item.name === currnetName.value)
  return component?.component || Badge
})

console.log(
  `%c [Fusion UI] Tip: you can access the documentation 'theme' object directly in the console.`,
  'color: #3894ff; font-weight: bold; font-size: 14px;'
)

// change theme
const changTheme = () => {
  theme.value.mode = theme.value.mode === 'dark' ? 'light' : 'dark'
}

// change component
const changeComponent = (name: string) => {
  currnetName.value = name
  localStorage.setItem('currnetName', name)
}

watch(theme, () => ((window as any).theme = toRaw(theme.value)), {
  immediate: true,
})

const handleClick = () => {
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
    actionEvent: (node, remove) => {
      new FnMessage().error({ content: 'error' })
      remove((node as any).id)
    },
  })
}
</script>

<template>
  <theme-provider :theme="theme">
    <header>
      <fn-button @click="currnetName = ''"><HomeFilled /> index </fn-button>
      <fn-button @click="changTheme">
        <DarkModeFilled v-show="theme.mode == 'dark'" />
        <SunnyFilled v-show="theme.mode == 'light'" />
        {{ theme.mode }}
      </fn-button>
      <fn-button @click="open = !open"> open modal </fn-button>
      <fn-button @click="handleClick"> open message </fn-button>
    </header>

    <component :is="name" v-if="currnetName" />

    <div class="grid-container" v-else>
      <aaa
        clickable
        :cs="{
          width: '215px',
          height: '75px',
          display: 'flex',
          fontSize: '18px',
          justifyContent: 'center',
        }"
        @click="changeComponent(item.name)"
        v-for="item in components"
      >
        {{ item.name }}</aaa
      >
    </div>
  </theme-provider>
</template>
