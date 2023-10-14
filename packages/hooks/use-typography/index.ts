/* eslint-disable @typescript-eslint/indent */
import type { UseNamespaceReturn } from '@fusion-ui-vue/utils'
import type { TypographyProps } from '@fusion-ui-vue/components'
import { computed } from 'vue'
import type { TypographyMap, TypographyProp } from '@fusion-ui-vue/theme'
import { typographyMapping, useTheme } from '@fusion-ui-vue/theme'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useTypography = (
  props: TypographyProps,
  ns: UseNamespaceReturn
) => {
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
    const styles = {
      [ns.b()]: {
        [`&:is(${renderTag})`]: {
          ...style,
          margin: 0,
          padding: 0,
          border: 'none',
        },
      },
    }

    return jss!.createStyleSheet(styles as any).attach().classes
  })
}
