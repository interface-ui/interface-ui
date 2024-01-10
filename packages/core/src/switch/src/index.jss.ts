import { computed } from 'vue'
import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { SwitchProps } from './switch'
import { switchHeight } from './switch'

const useCss: ComponentStylingHook<SwitchProps> = (props, ns) => {
  const theme = useTheme()

  const switchTokens = computed(() => {
    const { schemes } = useDynamicColor(props.color, theme)

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          primaryRgb: useDynamicRgb(schemes.primary),
          onPrimary: schemes.onPrimary,
        }),
    )
  })

  const switchSize = computed(() =>
    css(ns!.cssVarBlock({ height: `${switchHeight[props.size]}px` })),
  )

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() =>
    cx(switchTokens.value, switchSize.value, styleFromCs.value),
  )
}

export default useCss
