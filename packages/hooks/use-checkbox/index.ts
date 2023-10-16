import type { CheckboxProps } from '@fusion-ui-vue/components'
import { css, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useCheckbox: ComponentStylingHook<CheckboxProps> = (props, ns) => {
  const $color = useColor(props.color)

  return computed(() => {
    return css`
      --fn-checkbox-color: ${$color.value ?? 'var(--md-sys-color-primary)'};
      & .${ns!.e('icon')} {
        color: ${$color.value ?? 'var(--md-sys-color-primary)'};
      }
    `
  })
}
