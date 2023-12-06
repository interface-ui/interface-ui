import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import type { SwitchProps } from './switch'
import { switchHeight } from './switch'

const useCss: ComponentStylingHook<SwitchProps> = props =>
  computed(() => {
    const [$color, $onColor] = useColor(props, 'color')
    const [$colorRgb] = useRgbColor(props, 'color')

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
