/* eslint-disable no-mixed-operators */
import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@interface-ui/theme'
import { isString } from '@interface-ui/utils'
import type { ComponentStylingHook } from '@interface-ui/utils'
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
      --in-chip-color: ${$color.value};
      &.in-chip--filled {
        --in-chip-on-color: ${isSurfaceColor
          ? 'var(--md-sys-color-on-surface-variant)'
          : $onColor.value};
        & .in-icon-button {
          --in-icon-button-color: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant)'
            : $onColor.value};
          --in-icon-button-color-rgb: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant-rgb)'
            : $onRgbColor.value};
        }
      }
      &.in-chip--outlined {
        --in-chip-on-color: ${isSurfaceColor
          ? 'var(--md-sys-color-on-surface-variant)'
          : $color.value};
        border-color: ${isSurfaceColor
          ? 'var(--md-sys-color-outline)'
          : $color.value};
        & .in-icon-button {
          --in-icon-button-color: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant)'
            : $color.value};
          --in-icon-button-color-rgb: ${isSurfaceColor
            ? 'var(--md-sys-color-on-surface-variant-rgb)'
            : $rgbColor.value};
        }
      }
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(chipStyle, styleFromCs)
  })

export default useCss
