import { css, themeSchemes, useColor } from '@fusion-ui-vue/theme'

import { computed } from 'vue'
import type { AlertProps } from '../../components/alert/src/alert'
import type { ComponentStylingHook } from '../types'

export const useAlert: ComponentStylingHook<AlertProps> = (props, ns) => {
  const $color = props.color
    ? useColor(props, 'color')
    : useColor(props, 'severity', 'var(--md-sys-color-primary)')
  const $onColor = computed(() =>
    themeSchemes.includes(props.severity as any)
      ? `var(--md-sys-color-on-${props.severity})`
      : null
  )
  const $background = computed(() =>
    themeSchemes.includes(props.severity as any)
      ? `var(--md-sys-color-${props.severity}-container)`
      : null
  )

  const $backgroundFilled = computed(() =>
    themeSchemes.includes(props.severity as any)
      ? `var(--md-sys-color-${props.severity}-container-filled)`
      : null
  )

  return computed(() => {
    return css`
      --fn-alert-background: ${$background.value};
      --fn-alert-background-filled: ${$backgroundFilled.value};
      --fn-alert-color: ${$color.value};
      --fn-alert-on-color: ${$onColor.value ??
      'var(--md-sys-color-on-primary)'};
    `
  })
}
