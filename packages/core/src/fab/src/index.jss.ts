import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { FabProps } from './fab'

const useCss: ComponentStylingHook<FabProps> = (props, ns) => {
  const theme = useTheme()
  const dynamicColor = computed(() => useDynamicColor(props.color))
  const fbaTokens = computed(() => {
    const { [theme.value.mode]: schemes } = dynamicColor.value

    return css(
      schemes &&
        ns!.cssVarBlock({
          primaryContainer: schemes.primaryContainer,
          onPrimaryContainer: schemes.onPrimaryContainer,
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(fbaTokens.value, styleFromCs.value))
}

export default useCss
