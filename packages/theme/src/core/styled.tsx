import type { Component, VNodeProps, h } from 'vue'
import { computed, defineComponent, mergeProps } from 'vue'
import type { CSSInterpolation } from '@emotion/css'
import { css } from '@emotion/css'
import { useTheme } from '../hooks/use-theme'
import type Theme from './theme'

type RenderTypes = Parameters<typeof h>
type CssTypes =
  | TemplateStringsArray
  | CSSInterpolation
  | ((theme: Theme) => CSSInterpolation)

export const styled = (comp: Component | string, props?: RenderTypes[1]) => {
  return (style: CssTypes, ...args: CSSInterpolation[]) => {
    const theme = useTheme()

    return defineComponent({
      setup(_, { slots }) {
        const cssClass = computed(() =>
          style instanceof Function
            ? css(style(theme?.value))
            : css(style, ...args),
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
