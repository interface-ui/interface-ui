/* eslint-disable @typescript-eslint/indent */
import type { TypographyProp } from '@interface-ui/theme'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { TypographyProps } from './typography'

const useCss: ComponentStylingHook<TypographyProps> = (props, ns) => {
  const theme = useTheme()

  const typographyTokens = computed(() => {
    const { schemes } = useDynamicColor(props.color, theme)

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
        }),
    )
  })

  const typographyStyles = computed(() => {
    const [_, $variant, size] = props.variant.match(/([\w\d]+)\.?(\w+)?/)!
    const style: TypographyProp = size
      ? // @ts-expect-error: complicate types
        theme.value.typography[$variant][size]
      : // @ts-expect-error: complicate types
        theme.value.typography[$variant]

    return css(style as any)
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() =>
    cx(typographyTokens.value, typographyStyles.value, styleFromCs.value),
  )
}

export default useCss
