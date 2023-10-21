import type { Component, VNodeProps, h } from 'vue'
import { computed, defineComponent, mergeProps } from 'vue'
import type { CSSInterpolation } from '@emotion/css'
import { css } from '@emotion/css'
import { useTheme } from '../hooks'
import type { Theme } from './types'

type RenderTypes = Parameters<typeof h>

export const styled = (comp: Component | string, props?: RenderTypes[1]) => {
  return (
    style: TemplateStringsArray | ((theme: Theme) => CSSInterpolation),
    ...args: CSSInterpolation[]
  ) => {
    const theme = useTheme()

    return defineComponent({
      setup(_, { slots }) {
        const cssClass = computed(() =>
          style instanceof Function
            ? css(style(theme?.value))
            : css(style, ...args)
        )

        return () => {
          const Comp = comp as any
          return (
            <Comp
              {...mergeProps(props as VNodeProps, { class: cssClass.value })}
            >
              {slots?.default?.()}
            </Comp>
          )
        }
      },
    })
  }
}
