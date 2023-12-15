import { computed } from 'vue'
import { css, cx, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '../../../types'
import type { AlertProps } from './alert'

const useCss: ComponentStylingHook<AlertProps> = props =>
  computed(() => {
    const theme = useTheme()
    const severityPalette = theme.value.palettes[props.severity]

    const lightCss = css`
      --in-alert-color: color-mix(
        in srgb,
        ${severityPalette[80]},
        var(--in-sys-color-switch) 50%
      );
      --in-alert-on-color: ${severityPalette[40]};
      --in-alert-highlight-color: ${severityPalette[50]};
    `
    const darkCss = css`
      --in-alert-color: ${severityPalette[10]};
      --in-alert-on-color: ${severityPalette[50]};
      --in-alert-highlight-color: ${severityPalette[60]};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      { [lightCss]: theme.value.mode === 'light' },
      { [darkCss]: theme.value.mode === 'dark' },
      styleFromCs
    )
  })

export default useCss
