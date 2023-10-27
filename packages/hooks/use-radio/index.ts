import type { RadioProps } from '@fusion-ui-vue/components/radio'
import { css, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useRadio: ComponentStylingHook<RadioProps> = (props, ns) => {
  const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
  const $colorRgb = useRgbColor(
    props,
    'color',
    'var(--md-sys-color-primary-rgb)'
  )

  return computed(() => {
    return css`
      --fn-radio-color: ${$color.value};
      --fn-radio-color-rgb: ${$colorRgb.value};
      & .${ns!.e('icon')} {
        color: ${$color.value};
      }
    `
  })
}
