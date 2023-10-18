// import type { RippleProps } from '@fusion-ui-vue/components'
import { css, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { RippleProps } from '@fusion-ui-vue/components'
import type { ComponentStylingHook } from '../types'

export const useRipple: ComponentStylingHook<RippleProps> = (props, ns) => {
  const $color = useColor(props.color)

  return computed(() => {
    return css`
      & .${ns!.e('span')} {
        background-color: ${$color.value ?? 'var(--md-sys-color-primary)'};
      }
    `
  })
}
