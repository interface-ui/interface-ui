import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { FbaProps } from './fba'

const useCss: ComponentStylingHook<FbaProps> = (props, ns) => {
  const theme = useTheme()
  const fbaTokens = computed(() => {
    const { [theme.value.mode]: schemes } = useDynamicColor(props.color)

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          onPrimary: schemes.onPrimary,
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(fbaTokens.value, styleFromCs.value))
}

export default useCss
