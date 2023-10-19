import type { CheckboxProps } from '@fusion-ui-vue/components'
import { css, useColor } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useSwitchNew: ComponentStylingHook<CheckboxProps> = (props, ns) => {
  const $color = useColor(props.color)

  return computed(() => {
    const dotColor = props.modelValue ? ($color.value || 'var(--md-sys-color-primary)') : '#fff'
    const dotHoverColor = props.modelValue ? ($color.value || 'var(--md-sys-color-primary)') : '#605959'
    const trackColor = props.modelValue ? ($color.value || 'var(--md-sys-color-primary)') : '#000'

    return css`
      --fn-switch-color: ${$color.value || 'var(--md-sys-color-primary)'};
      --fn-switch--track-color: ${trackColor};
      --fn-switch--dot-color: ${dotColor};
      --fn-switch--dot-hover-color: ${dotHoverColor};
      & .${ns!.e('icon')} {
        color: ${$color.value || 'var(--md-sys-color-primary)'};
      }
    `
  })
}
