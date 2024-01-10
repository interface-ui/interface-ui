import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { DrawerProps } from './drawer'

const useCss: ComponentStylingHook<DrawerProps> = (props, ns) => {
  const theme = useTheme()

  const drawerTokens = computed(() => {
    const { schemes } = useDynamicColor(props.background, theme)

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(drawerTokens.value, styleFromCs.value))
}

export default useCss
