import { computed } from 'vue'
import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import { type IconButtonProps, iconSizeMapping } from './icon-button'

const useCss: ComponentStylingHook<IconButtonProps> = (props, ns) => {
  const theme = useTheme()
  const dynamicColor = computed(() => useDynamicColor(props.color, theme))

  const iconButtonTokens = computed(() => {
    const { [theme.value.mode]: schemes } = dynamicColor.value

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          primaryRgb: useDynamicRgb(schemes.primary),
        }),
    )
  })

  const iconButtonSize = computed(
    () => css`
      &.${ns!.m(props.size)} .in-icon,
      &.${ns!.m(props.size)} .in-icon-material {
        font-size: ${iconSizeMapping[props.size]}px;
      }
    `,
  )

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() =>
    cx(iconButtonTokens.value, iconButtonSize.value, styleFromCs.value),
  )
}

export default useCss
