import { css, useColor, useRgbColor } from '@interface-ui/theme'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../../../types'
import type { ButtonProps } from './button'
import { buttonHeight } from './button'

const useCss: ComponentStylingHook<ButtonProps> = (props, ns) =>
  computed(() => {
    const [$color, $onColor] = useColor(props, 'color')
    const [$colorRgb] = useRgbColor(props, 'color')

    return css`
      --in-button-color: ${$color.value};
      --in-button-color-rgb: ${$colorRgb.value};
      --in-button-on-color: ${$onColor.value};
      &.${ns!.m('filled')} {
        box-shadow: ${props.disableElevation
          ? 'var(--md-sys-elevation-level-0)'
          : 'var(--md-sys-elevation-level-2)'};
        &:not([disabled]):hover {
          box-shadow: ${props.disableElevation
            ? 'var(--md-sys-elevation-level-0)'
            : 'var(--md-sys-elevation-level-4)'};
        }
      }
      &.${ns!.m(props.size)} {
        height: ${buttonHeight[props.size]}px;
      }
    `
  })

export default useCss
