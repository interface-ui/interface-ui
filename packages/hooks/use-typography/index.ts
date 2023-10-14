/* eslint-disable @typescript-eslint/indent */
import type { UseNamespaceReturn } from '@fusion-ui-vue/utils'
import type { TypographyProps } from '@fusion-ui-vue/components'
import { computed } from 'vue'
import type { TypographyProp } from '@fusion-ui-vue/theme'
import useTheme from '@fusion-ui-vue/theme'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useTypography = (
  props: TypographyProps,
  ns: UseNamespaceReturn
) => {
  const { variant } = props
  const [_, $variant, size] = variant.match(/([\w\d]+)\.?(\w+)?/)!

  const theme = useTheme()
  const style: TypographyProp = size
    ? // @ts-expect-error: complicate types
      theme.value.typography[$variant][size]
    : // @ts-expect-error: complicate types
      theme.value.typography[$variant]

  return computed(() => {
    const styles = {
      [ns.b()]: style,
    }

    return jss!.createStyleSheet(styles as any).attach().classes
  })
}
