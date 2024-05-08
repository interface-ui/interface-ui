import type { ComponentStylingHook } from '@interface-ui/utils'
import type { Ref } from 'vue'
import { computed } from 'vue'
import type { UseDynamicColorReturn } from '@interface-ui/theme'
import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import { type ButtonGroupProps } from './button-group'

const useCss: ComponentStylingHook<
  ButtonGroupProps,
  { cssClass: string; dynamicColor: Ref<UseDynamicColorReturn> }
> = (props, ns) => {
  const theme = useTheme()

  const dynamicColor = computed<UseDynamicColorReturn>(() => {
    return useDynamicColor(props.color, theme)
  })

  const buttonGroupTokens = computed(() => {
    const { schemes } = dynamicColor.value

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          primaryRgb: useDynamicRgb(schemes.primary),
          outline: schemes.outline,
          outlineRgb: useDynamicRgb(schemes.outline),
          onSurfaceRgb: useDynamicRgb(schemes.onSurface),
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => ({
    cssClass: cx(buttonGroupTokens.value, styleFromCs.value),
    dynamicColor,
  }))
}

export default useCss
