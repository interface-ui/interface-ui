import {
  css,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { ButtonProps } from './button'
import { buttonHeight } from './button'

const useCss: ComponentStylingHook<ButtonProps> = (props, ns) =>
  computed(() => {
    const theme = useTheme()
    const schemes = useDynamicColor(props.color)

    return css([
      `
      &.${ns!.m(props.size)} {
        height: ${buttonHeight[props.size]}px;
      }
    `,
      ns!.cssVarBlock({
        primary: schemes[theme.value.mode]?.primary,
        primaryRgb: useDynamicRgb(schemes[theme.value.mode]?.primary),
        onPrimary: schemes[theme.value.mode]?.onPrimary,
        surfaceContainerLow: schemes[theme.value.mode]?.surfaceContainerLow,
      }),
    ])
  })

export default useCss
