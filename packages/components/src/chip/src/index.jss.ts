/* eslint-disable no-mixed-operators */
import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import { isString } from '@vue/shared'
import type { ComponentStylingHook } from '../../../types'
import type { ChipProps } from './chip'

const useCss: ComponentStylingHook<ChipProps> = props =>
  computed(() => {
    const [$color, $onColor] = useColor(props, 'color')
    const [$rgbColor, $onRgbColor] = useRgbColor(props, 'color')

    const isSurfaceColor =
      isString(props.color) && typeof props.color !== 'function'
        ? props.color.toLowerCase().includes('surface')
        : false

    const chipStyle = css`
      --fn-chip-color: ${$color.value};
      &.fn-chip--filled {
        --fn-chip-on-color: ${isSurfaceColor
          ? 'var(--md-sys-color-on-surface-variant)'
          : $onColor.value};
        & .fn-icon-button {
          --fn-icon-button-color: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant)'
            : $onColor.value};
          --fn-icon-button-color-rgb: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant-rgb)'
            : $onRgbColor.value};
        }
      }
      &.fn-chip--outlined {
        --fn-chip-on-color: ${isSurfaceColor
          ? 'var(--md-sys-color-on-surface-variant)'
          : $color.value};
        border-color: ${isSurfaceColor
          ? 'var(--md-sys-color-outline)'
          : $color.value};
        & .fn-icon-button {
          --fn-icon-button-color: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant)'
            : $color.value};
          --fn-icon-button-color-rgb: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant-rgb)'
            : $rgbColor.value};
        }
      }
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(chipStyle, styleFromCs)
  })

export default useCss
