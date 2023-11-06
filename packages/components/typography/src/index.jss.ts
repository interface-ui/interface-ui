/* eslint-disable @typescript-eslint/indent */
import type { TypographyMap, TypographyProp } from '@fusion-ui-vue/theme'
import {
  css,
  cx,
  typographyMapping,
  useColor,
  useTheme,
} from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import type { TypographyProps } from './typography'

const useCss: ComponentStylingHook<TypographyProps> = props => {
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
    const [$color] = useColor(props, 'color')
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      css({
        [`&:is(${renderTag})`]: {
          color: $color.value,
          margin: 0,
          border: 'none',
          ...style,
        },
      } as any),
      styleFromCs
    )
  })
}

export default useCss
