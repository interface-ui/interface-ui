// import type { RippleProps } from '@fusion-ui-vue/components'
import { css, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { RippleProps } from '@fusion-ui-vue/components'
import type { ComponentStylingHook } from '../types'

export const useRipple: ComponentStylingHook<RippleProps> = (props, ns) => {
  const $color = useColor(props, 'color', 'var(--fn-sys-color-ripple)')

  return computed(() => {
    return css`
      --fn-ripple--duration: ${props.duration}ms;
      & .${ns!.e('span')} {
        background-color: ${$color.value};
      }
    `
  })
}
