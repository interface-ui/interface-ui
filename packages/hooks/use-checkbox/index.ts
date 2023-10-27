import type { CheckboxProps } from '@fusion-ui-vue/components'
import { css, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useCheckbox: ComponentStylingHook<CheckboxProps> = (props, ns) => {
  const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')

  return computed(() => {
    return css`
      --fn-checkbox-color: ${$color.value};
      & .${ns!.e('icon')} {
        color: ${$color.value};
      }
    `
  })
}
