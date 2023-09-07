import type { CheckboxProps } from '@fusion-ui/components/checkbox/src/checkbox'
import useTheme from '@fusion-ui/theme'
import { computed } from 'vue'
import { useJSS } from '../use-jss'

const theme = useTheme()
const jss = useJSS()

export const useCheckbox = (props: CheckboxProps) => {
  const $color = computed(() => {
    const { color } = props
    if (!color) {
      return null
    }
    if (typeof color === 'function') {
      return color(theme)
    }
    if (['primary', 'secondary', 'tertiary', 'error'].includes(color)) {
      return `var(--md-sys-color-${color})`
    }
    return color
  })

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
