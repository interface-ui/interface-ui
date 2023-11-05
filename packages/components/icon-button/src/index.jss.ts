import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import { iconSize } from '@fusion-ui-vue/constants'
import type { IconButtonProps } from './icon-button'

const useCss: ComponentStylingHook<IconButtonProps> = (props, ns) => {
  const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
  const $colorRgb = useRgbColor(
    props,
    'color',
    'var(--md-sys-color-primary-rgb)'
  )

  const iconButtonStyle = css`
    --fn-icon-button-color: ${$color.value};
    --fn-icon-button-color-rgb: ${$colorRgb.value};
    &.${ns!.m(props.size)} .fn-icon {
      font-size: ${iconSize[props.size]}px;
    }
  `

  return computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(iconButtonStyle, styleFromCs)
  })
}

export default useCss
