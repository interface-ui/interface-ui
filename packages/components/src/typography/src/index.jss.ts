/* eslint-disable @typescript-eslint/indent */
import type { TypographyProp } from '@fusion-ui-vue/theme'
import { css, cx, useColor, useTheme } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../../../types'
import type { TypographyProps } from './typography'

const useCss: ComponentStylingHook<TypographyProps> = props => {
  const { variant } = props
  const [_, $variant, size] = variant.match(/([\w\d]+)\.?(\w+)?/)!

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
        color: $color.value,
        margin: 0,
        border: 'none',
        ...style,
      } as any),
      styleFromCs
    )
  })
}

export default useCss
