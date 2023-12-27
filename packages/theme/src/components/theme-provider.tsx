import type { Component, PropType } from 'vue'
import { defineComponent, ref, watch } from 'vue'
import { Theme, injectJSS } from '@/core'
import { useTheme, useThemeProvider } from '@/hooks'
import type { ThemeMode } from '@/mode'
import type { ThemeSchemes } from '@/types'

export default defineComponent({
  name: 'ThemeProvider',
  props: {
    theme: {
      type: Object as PropType<Theme>,
      required: true,
    },
    component: {
      type: [String, Object] as PropType<string | Component>,
      default: 'div',
    },
    watcher: {
      type: Function,
    },
  },
  emits: ['update:theme'],
  setup(props, { slots, emit }) {
    const html = document.documentElement
    const theme = ref(props.theme)
    const parentTheme = props.theme.target === 'host' ? useTheme() : ref(null)

    const element = ref<HTMLDivElement | null>(null)
    const lightSchemes = theme.value._lightSchemes
    const darkSchemes = theme.value._darkSchemes

    const injectCss = injectJSS(
      theme.value.target,
      lightSchemes,
      darkSchemes,
      theme.value as Theme,
    )

    const toggleTheme = (mode: ThemeMode) => {
      const dom = props.theme.target === 'root' ? html : element.value!
      const { schemes } = mode === 'dark' ? darkSchemes! : lightSchemes!

      if (mode === 'dark') {
        dom.setAttribute('data-theme', 'dark')
      } else {
        dom.removeAttribute('data-theme')
      }

      const { palettes, target, schemes: $schemes } = theme.value

      theme.value = new Theme(
        { ...$schemes, ...schemes } as ThemeSchemes,
        palettes,
        mode,
        lightSchemes,
        darkSchemes,
        target,
      )
      emit('update:theme', theme.value)
    }

    const watchTarget =
      props.theme.target === 'root'
        ? () => props.theme.mode
        : () => parentTheme.value?.mode ?? props.theme.mode
    props.watcher ? props.watcher() : watch(watchTarget, toggleTheme)

    useThemeProvider(theme)

    const Comp = props.component as any
    return () =>
      // eslint-disable-next-line multiline-ternary
      theme.value.target === 'root' ? (
        slots.default?.()
      ) : (
        <Comp ref={element as any} class={injectCss}>
          {slots.default?.()}
        </Comp>
      )
  },
})
