import type { Component, ExtractPropTypes, PropType } from 'vue'
import { buildProps } from '@interface-ui/utils'
import type { Theme } from '@/core'

export const themeProviderProps = buildProps({
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
})

export type ThemeProviderProps = ExtractPropTypes<typeof themeProviderProps>

export const themeProviderEmits = ['update:theme']
