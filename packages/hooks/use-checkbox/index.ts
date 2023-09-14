import type { CheckboxProps } from '@fusion-ui/components/checkbox'
import { useColor } from '@fusion-ui/theme'
import type { UseNamespaceReturn } from '@fusion-ui/utils/useNamespace'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useCheckbox = (props: CheckboxProps, ns: UseNamespaceReturn) => {
  const $color = useColor(props.color)

  const styles = {
    [ns.b()]: {
      '&:not([disabled]):hover::after': {
        backgroundColor: $color.value ?? 'var(--md-sys-color-primary)',
      },
    },
    [ns.e('icon')]: {
      color: $color.value ?? 'var(--md-sys-color-primary)',
    },
  }
  return jss!.createStyleSheet(styles).attach()
}
