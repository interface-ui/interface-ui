import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import { isString } from '@interface-ui/utils'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { ListProps } from './list'

const useCss: ComponentStylingHook<ListProps> = (props, ns) => {
  const theme = useTheme()

  const listTokens = computed(() => {
    const { schemes } = useDynamicColor(props.background, theme)

    const isSurfaceColor =
      isString(props.background) &&
      props.background.startsWith('surface') &&
      props.background !== 'surface'

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          onPrimary: isSurfaceColor
            ? ns!.getGlobalTokens('color', 'onSurfaceVariant')
            : schemes.onPrimary,
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(listTokens.value, styleFromCs.value))
}

export default useCss
