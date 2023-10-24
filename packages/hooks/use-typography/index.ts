/* eslint-disable @typescript-eslint/indent */
import type { TypographyProps } from '@fusion-ui-vue/components'
import { computed } from 'vue'
import type { TypographyMap, TypographyProp } from '@fusion-ui-vue/theme'
import { css, typographyMapping, useTheme } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from '../types'

export const useTypography: ComponentStylingHook<TypographyProps> = props => {
  const { variant, component } = props
  const [_, $variant, size] = variant.match(/([\w\d]+)\.?(\w+)?/)!

  const renderTag =
    component ?? typographyMapping[$variant as keyof TypographyMap] ?? 'span'

  const theme = useTheme()
  const style: TypographyProp = size
    ? // @ts-expect-error: complicate types
      theme.value.typography[$variant][size]
    : // @ts-expect-error: complicate types
      theme.value.typography[$variant]

  return computed(() => {
    return css({
      [`&:is(${renderTag})`]: {
        margin: 0,
        border: 'none',
        ...style,
      },
    } as any)
  })
}
