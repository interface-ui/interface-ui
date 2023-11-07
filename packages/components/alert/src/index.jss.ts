import { computed } from 'vue'
import { css, cx, useTheme } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from 'packages/hooks/types'
import type { AlertProps } from './alert'

const useCss: ComponentStylingHook<AlertProps> = props =>
  computed(() => {
    const theme = useTheme()
    const severityPalette = theme.value.palettes[props.severity]

    const lightCss = css`
      --fn-alert-color: color-mix(
        in srgb,
        ${severityPalette[80]},
        var(--fn-sys-color-switch) 50%
      );
      --fn-alert-on-color: ${severityPalette[40]};
      --fn-alert-highlight-color: ${severityPalette[50]};
    `
    const darkCss = css`
      --fn-alert-color: ${severityPalette[10]};
      --fn-alert-on-color: ${severityPalette[50]};
      --fn-alert-highlight-color: ${severityPalette[60]};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      { [lightCss]: theme.value.mode === 'light' },
      { [darkCss]: theme.value.mode === 'dark' },
      styleFromCs
    )
  })

export default useCss
