import type { UseNamespaceReturn } from '@fusion-ui/utils/useNamespace'
import { useColor } from '@fusion-ui/theme'
import type { ButtonProps, IconButtonProps } from '@fusion-ui/components'
import { useJSS } from '../use-jss'

const jss = useJSS()

export const useButton = (props: ButtonProps, ns: UseNamespaceReturn) => {
  const $color = useColor(props.color)

  const styles = {
    [ns.b()]: {
      '--fn-button-color': $color.value ?? 'var(--md-sys-color-primary)',
    },
    [ns.m('filled')]: {
      'box-shadow': props.disableElevation
        ? 'var(--md-sys-elevation-level-0)'
        : 'var(--md-sys-elevation-level-2)',
      '&:not([disabled]):hover': {
        'box-shadow': props.disableElevation
          ? 'var(--md-sys-elevation-level-0)'
          : 'var(--md-sys-elevation-level-4)',
      },
    },
  }

  return jss!.createStyleSheet(styles as any).attach()
}

export const useIconButton = (
  props: IconButtonProps,
  ns: UseNamespaceReturn
) => {
  const $color = useColor(props.color)

  const styles = {
    [ns.b()]: {
      '--fn-icon-button-color': $color.value ?? 'var(--md-sys-color-primary)',
    },
  }

  return jss!.createStyleSheet(styles as any).attach()
}
