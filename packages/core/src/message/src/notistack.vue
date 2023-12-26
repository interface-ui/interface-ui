<script lang="ts" setup>
import createTheme, { ThemeProvider } from '@interface-ui/theme'
import { isNumber, useNamespace } from '@interface-ui/utils'
import type { VNode } from 'vue'
import { TransitionGroup, reactive } from 'vue'

const children = reactive<VNode[]>([])
const html = document.documentElement
const theme = createTheme(undefined, {
  target: 'host',
  config: { mode: html.attributes['data-theme' as any] ? 'dark' : 'light' },
})
const ns = useNamespace('notistack')

const add = (child: VNode) => {
  children.push(child)
}

const remove = (condition: number | string) => {
  if (isNumber(condition)) {
    children.splice(condition, 1)
  } else {
    const index = children.findIndex(child => (child as any).id === condition)
    if (index !== -1) {
      children.splice(index, 1)
    }
  }
}

const removeAll = () => {
  children.splice(0, children.length)
}

const watcher = () => {
  if (typeof window === 'undefined') {
    return
  }

  const MutationObserver = window.MutationObserver
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === 'attributes') {
        theme.value.mode = theme.value.mode === 'light' ? 'dark' : 'light'
      }
    })
  })

  observer.observe(html, {
    attributes: true,
    attributeFilter: ['data-theme'],
  })
}

defineExpose({ add, remove, removeAll })
</script>

<template>
  <theme-provider
    v-model:theme="theme"
    :watcher="watcher"
    :component="TransitionGroup"
    tag="div"
    name="message"
    :class="[ns.b()]"
  >
    <component :is="child" v-for="child in children" :key="(child as any).id" />
  </theme-provider>
</template>
