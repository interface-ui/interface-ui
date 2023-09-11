import type { CheckboxProps } from '@fusion-ui/components/checkbox'
import { useColor } from '@fusion-ui/theme'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useCheckbox = (props: CheckboxProps) => {
  const $color = useColor(props.color)

  const styles = {
    'fn-checkbox-icon-root': {
      '&:hover::after': {
        backgroundColor: $color.value ?? 'var(--md-sys-color-primary)',
      },
    },
    'fn-checkbox-icon': {
      color: $color.value ?? 'var(--md-sys-color-primary)',
    },
  }
  return jss!.createStyleSheet(styles).attach()
}
