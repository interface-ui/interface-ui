import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import { iconSize } from '@fusion-ui-vue/constants'
import type { IconButtonProps } from './icon-button'

const useCss: ComponentStylingHook<IconButtonProps> = (props, ns) =>
  computed(() => {
    const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
    const $colorRgb = useRgbColor(
      props,
      'color',
      'var(--md-sys-color-primary-rgb)'
    )

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      css`
        --fn-icon-button-color: ${$color.value};
        --fn-icon-button-color-rgb: ${$colorRgb.value};
        background-color: transparent;
        appearance: none;
        padding: 8px;
        border-radius: 50%;
        height: fit-content;
        color: var(--fn-icon-button-color);
        &[disabled] {
          color: var(--fn-sys-color-disabled-level-0);
        }
        &.${ns!.m(props.size)} .fn-icon {
          font-size: ${iconSize[props.size]}px;
        }
        @media (any-hover: hover) {
          &:not([disabled]):hover {
            background-color: rgb(
              var(--fn-icon-button-color-rgb) /
                var(--md-sys-state-hover-state-layer-opacity)
            );
          }
        }
      `,
      styleFromCs
    )
  })

export default useCss
