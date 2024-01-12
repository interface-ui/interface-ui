import { computed } from 'vue'
import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import { type ComponentStylingHook, useNamespace } from '@interface-ui/utils'
import type { ChipProps } from './chip'

const useCss: ComponentStylingHook<ChipProps> = (props, ns) => {
  const theme = useTheme()
  const iconButtonNs = useNamespace('icon-button')

  const chipTokens = computed(() => {
    const { schemes } = useDynamicColor(props.color, theme)

    return css([
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          primaryRgb: useDynamicRgb(schemes.primary),
          onPrimary: schemes.onPrimary,
          primaryContainer: schemes.primaryContainer,
          onPrimaryContainer: schemes.onPrimaryContainer,
          onPrimaryContainerRgb: useDynamicRgb(schemes.onPrimaryContainer),
        }),
      {
        '&.in-chip--filled .in-icon-button': iconButtonNs!.cssVarBlock({
          primary: ns!.getCssVarBlock('onPrimaryContainer'),
          primaryRgb: ns!.getCssVarBlock('onPrimaryContainerRgb'),
        }),
      },
      {
        '&.in-chip--outlined .in-icon-button': iconButtonNs!.cssVarBlock({
          primary: ns!.getCssVarBlock('primary'),
          primaryRgb: ns!.getCssVarBlock('primaryRgb'),
        }),
      },
    ])
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(chipTokens.value, styleFromCs.value))
}

export default useCss
