import type { RadioProps } from '@fusion-ui-vue/components/radio'
import { css, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useRadio: ComponentStylingHook<RadioProps> = (props, ns) => {
  const $color = useColor(props.color)

  return computed(() => {
    return css`
      --fn-radio-color: ${$color.value ?? 'var(--md-sys-color-primary)'};
      & .${ns!.e('icon')} {
        color: ${$color.value ?? 'var(--md-sys-color-primary)'};
      }
    `
  })
}
