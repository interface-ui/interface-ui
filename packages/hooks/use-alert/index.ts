import createTheme, { css, themeSchemes, useColor } from '@fusion-ui-vue/theme'

import { computed } from 'vue'
import type { AlertProps } from '../../components/alert/src/alert'
import type { ComponentStylingHook } from '../types'
const uiTheme = createTheme()

function getValueByKey<T>(obj: Record<string, T>, key: string): T | undefined {
  if (key in obj) {
    return obj[key]
  }
  return undefined
}

export const useAlert: ComponentStylingHook<AlertProps> = (props, ns) => {
  const $color = props.color
    ? useColor(props, 'color')
    : useColor(props, 'severity', 'var(--md-sys-color-primary)')

  const $iconColor = computed(() => {
    const values = getValueByKey(uiTheme.value.palettes.error, '40')
    return values
  }

  )

  const $onColor = computed(() =>
    themeSchemes.includes(props.severity as any)
      ? `var(--md-sys-color-on-${props.severity})`
      : null
  )

  const $background = computed(() => {
    if (props.color) {
      return themeSchemes.includes(props.color as any)
        ? `var(--md-sys-color-${props.color}-container)`
        : props.color as string
    } else {
      return themeSchemes.includes(props.severity as any)
        ? `var(--md-sys-color-${props.severity}-container)`
        : null
    }
  })

  const $backgroundFilled = computed(() =>
    themeSchemes.includes(props.severity as any)
      ? `var(--md-sys-color-${props.severity}-container-filled)`
      : null
  )

  return computed(() => {
    return css`
      --fn-alert-2222: ${$iconColor.value};
      --fn-alert-background: ${$background.value};
      --fn-alert-background-filled: ${$backgroundFilled.value};
      --fn-alert-color: ${$color.value};
      --fn-alert-on-color: ${$onColor.value ??
      'var(--md-sys-color-on-primary)'};
    `
  })
}
