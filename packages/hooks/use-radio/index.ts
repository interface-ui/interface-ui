import type { RadioProps } from '@fusion-ui/components/radio'
import { useColor } from '@fusion-ui/theme'
import type { UseNamespaceReturn } from '@fusion-ui/utils'
import { computed } from 'vue'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useRadio = (props: RadioProps, ns: UseNamespaceReturn) => {
  const $color = useColor(props.color)

  return computed(() => {
    const styles = {
      [ns.b()]: {
        '--fn-radio-color': $color.value ?? 'var(--md-sys-color-primary)',
      },
      [ns.e('icon')]: {
        color: $color.value ?? 'var(--md-sys-color-primary)',
      },
    }
    return jss!.createStyleSheet(styles).attach().classes
  })
}
