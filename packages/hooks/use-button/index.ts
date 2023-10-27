import { css, themePaletteColor, useColor } from '@fusion-ui-vue/theme'
import {
  type ButtonProps,
  type IconButtonProps,
  buttonHeight,
} from '@fusion-ui-vue/components'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useButton: ComponentStylingHook<ButtonProps> = (props, ns) => {
  const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
  const $onColor = computed(() =>
    themePaletteColor.includes(props.color as any)
      ? `var(--md-sys-color-on-${props.color})`
      : null
  )

  return computed(() => {
    return css`
      --fn-button-color: ${$color.value};
      --fn-button-on-color: ${
        $onColor.value ?? 'var(--md-sys-color-on-primary)'
      };
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
}

export const useIconButton: ComponentStylingHook<IconButtonProps> = props => {
  const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')

  return computed(() => {
    return css`
      --fn-icon-button-color: ${$color.value};
    `
  })
}
