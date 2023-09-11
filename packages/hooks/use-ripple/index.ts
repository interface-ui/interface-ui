import type { RippleProps } from '@fusion-ui/components/ripple'
import { useColor } from '@fusion-ui/theme'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useRipple = (props: RippleProps) => {
  const $color = useColor(props.color, 'var(--fn-sys-color-ripple)')

  const styles = {
    'fn-ripple': {
      backgroundColor: $color.value ?? 'var(--md-sys-color-primary)',
    },
  }

  return jss!.createStyleSheet(styles).attach()
}
