import type { Component } from 'vue'
import { computed, h } from 'vue'
import type { CSSInterpolation } from '@emotion/css'
import { css } from '@emotion/css'
import { useTheme } from '../hooks'
import type { Theme } from './types'

export const styled = (comp: Component) => {
  return (
    style: TemplateStringsArray | ((theme: Theme) => CSSInterpolation)
  ) => {
    const theme = useTheme()
    return computed(() => {
      const className =
        style instanceof Function ? css(style(theme?.value)) : css(style)

      return h(comp, { class: className })
    })
  }
}
