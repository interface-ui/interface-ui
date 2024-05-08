import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { ListItemProps } from './list-item'

const useCss: ComponentStylingHook<ListItemProps> = (props, ns) => {
  const theme = useTheme()

  const listItemTokens = computed(() => {
    const { schemes } = useDynamicColor(props.highlightColor, theme)

    return css(
      schemes &&
        ns!.cssVarBlock({
          highlightColor: schemes.primary,
        }),
    )
  })

  const listItemStyles = computed(
    () => css`
      padding: 12px 16px 12px ${16 + +props.indent * 40}px;
      align-items: ${props.alignItems};
    `,
  )

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() =>
    cx(listItemTokens.value, listItemStyles.value, styleFromCs.value),
  )
}

export default useCss
