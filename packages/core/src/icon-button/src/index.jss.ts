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
  const iconButtonTokens = computed(() => {
    const { [theme.value.mode]: schemes } = useDynamicColor(props.color)

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

// computed(() => {
//   const [$color] = useColor(props, 'color')
//   const [$colorRgb] = useRgbColor(props, 'color')

//   const iconButtonStyle = css`
//     --in-icon-button-color: ${$color.value};
//     --in-icon-button-color-rgb: ${$colorRgb.value};
//     &.${ns!.m(props.size)} .in-icon {
//       font-size: ${iconSize[props.size]}px;
//     }
//   `
//   const styleFromCs = props.cs ? css(props.cs) : ''
//   return cx(iconButtonStyle, styleFromCs)
// })
