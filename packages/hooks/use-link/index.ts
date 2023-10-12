import type { UseNamespaceReturn } from '@fusion-ui/utils'
import { useColor } from '@fusion-ui/theme'
import type { LlinkProps } from '@fusion-ui/components'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useLink = (props: LlinkProps, ns: UseNamespaceReturn) => {
  const $color = useColor(props.color as any)

  const styles = {
    [ns.b()]: {
      '--fn-link__underline--status':
        props.underline === 'none'
          ? 'none'
          : props.underline === 'hover'
          ? 'none'
          : 'underline',
      '--fn-link__underline--hover':
        props.underline === 'none'
          ? 'none'
          : props.underline === 'hover'
          ? 'underline'
          : 'underline',
      '--fn-link-color': $color.value ?? 'var(--md-sys-color-primary)',
    },
  }

  return jss!.createStyleSheet(styles as any).attach()
}
