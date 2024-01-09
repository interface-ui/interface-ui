import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { AvatarProps } from './avatar'

const useCss: ComponentStylingHook<AvatarProps> = (props, ns) => {
  const theme = useTheme()

  const avatarSize = computed(
    () => css`
      height: ${props.size}px;
      width: ${props.size}px;
      min-width: ${props.size}px;
    `,
  )
  const avatarTokens = computed(() => {
    const { schemes } = useDynamicColor(props.color, theme)

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          onPrimary: schemes.onPrimary,
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() =>
    cx(avatarTokens.value, avatarSize.value, styleFromCs.value),
  )
}

export default useCss
