import type { RippleProps } from '@fusion-ui/components/ripple'
import { useColor } from '@fusion-ui/theme'
import type { UseNamespaceReturn } from '@fusion-ui/utils/useNamespace'
import { computed } from 'vue'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useRipple = (props: RippleProps, ns: UseNamespaceReturn) => {
  const $color = useColor(props.color)

  return computed(() => {
    const styles = {
      [ns.e('span')]: {
        backgroundColor: $color.value ?? 'var(--md-sys-color-primary)',
      },
    }

    return jss!.createStyleSheet(styles).attach().classes
  })
}
