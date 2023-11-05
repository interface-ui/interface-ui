import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import {
  css,
  cx,
  themeSchemes,
  useColor,
  useRgbColor,
} from '@fusion-ui-vue/theme'
import type { SwitchProps } from './switch'
import { switchHeight } from './switch'

const useCss: ComponentStylingHook<SwitchProps> = props =>
  computed(() => {
    const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
    const $colorRgb = useRgbColor(
      props,
      'color',
      'var(--md-sys-color-primary-rgb)'
    )
    const $onColor = computed(() =>
      themeSchemes.includes(props.color as any)
        ? `var(--md-sys-color-on-${props.color})`
        : 'var(--md-sys-color-on-primary)'
    )

    const switchStyle = css`
      --fn-switch-color: ${$color.value};
      --fn-switch-color-rgb: ${$colorRgb.value};
      --fn-switch-on-color: ${$onColor.value};
      --fn-switch-height: ${switchHeight[props.size]}px;
    `
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(switchStyle, styleFromCs)
  })

export default useCss
