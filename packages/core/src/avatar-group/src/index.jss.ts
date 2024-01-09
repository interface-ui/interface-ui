import type { ComponentStylingHook } from '@interface-ui/utils'
import { computed } from 'vue'
import { css, cx } from '@interface-ui/theme'
import type { AvatarGroupProps } from './avatar-group'

const useCss: ComponentStylingHook<AvatarGroupProps> = (props, ns) => {
  const avatarGroupTokens = computed(() =>
    css(
      ns!.cssVarBlock({
        border: props.avatarBorder,
      }),
    ),
  )

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(avatarGroupTokens.value, styleFromCs.value))
}

export default useCss
