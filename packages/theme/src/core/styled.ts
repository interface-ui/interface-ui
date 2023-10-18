import type { Component } from 'vue'
import { computed, defineComponent, h } from 'vue'
import type { CSSInterpolation } from '@emotion/css'
import { css } from '@emotion/css'
import { useTheme } from '../hooks'
import type { Theme } from './types'

export const styled = (comp: Component | string) => {
  return (
    style: TemplateStringsArray | ((theme: Theme) => CSSInterpolation),
    ...args: CSSInterpolation[]
  ) => {
    const theme = useTheme()

    return defineComponent({
      setup(_, { slots }) {
        const className = computed(() =>
          style instanceof Function
            ? css(style(theme?.value))
            : css(style, ...args)
        )

        const slotsVNodes = slots?.default?.()
        return () => h(comp as any, { class: className.value }, slotsVNodes)
      },
    })
  }
}
