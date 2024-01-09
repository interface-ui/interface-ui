import type { ComponentStylingHook } from '@interface-ui/utils'
import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { AvatarGroupProps } from './avatar-group'

const useCss: ComponentStylingHook<AvatarGroupProps> = (props, ns) => {
  const theme = useTheme()
  const avatarGroupTokens = computed(() => {
    const { [theme.value.mode]: schemes } = useDynamicColor(
      props.avatarBorder,
      theme,
    )
    return css(
      schemes &&
        ns!.cssVarBlock({
          border: schemes.primary,
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(avatarGroupTokens.value, styleFromCs.value))
}

export default useCss
