import { css, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import type { ButtonProps } from './button'
import { buttonHeight } from './button'

const useCss: ComponentStylingHook<ButtonProps> = (props, ns) =>
  computed(() => {
    const [$color, $onColor] = useColor(props, 'color')
    const [$colorRgb] = useRgbColor(props, 'color')

    return css`
      --fn-button-color: ${$color!.value};
      --fn-button-color-rgb: ${$colorRgb.value};
      --fn-button-on-color: ${$onColor.value};
      &.${ns!.m('filled')} {
          box-shadow: ${
            props.disableElevation
              ? 'var(--md-sys-elevation-level-0)'
              : 'var(--md-sys-elevation-level-2)'
          };
          &:not([disabled]):hover {
            box-shadow: ${
              props.disableElevation
                ? 'var(--md-sys-elevation-level-0)'
                : 'var(--md-sys-elevation-level-4)'
            };
          },
        },
      &.${ns!.m(props.size)} {
        height: ${buttonHeight[props.size]}px;
      }
    `
  })

export default useCss
