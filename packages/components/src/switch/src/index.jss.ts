import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@interface-ui/theme'
import type { ComponentStylingHook } from '../../../types'
import type { SwitchProps } from './switch'
import { switchHeight } from './switch'

const useCss: ComponentStylingHook<SwitchProps> = props =>
  computed(() => {
    const [$color, $onColor] = useColor(props, 'color')
    const [$colorRgb] = useRgbColor(props, 'color')

    const switchStyle = css`
      --in-switch-color: ${$color.value};
      --in-switch-color-rgb: ${$colorRgb.value};
      --in-switch-on-color: ${$onColor.value};
      --in-switch-height: ${switchHeight[props.size]}px;
    `
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(switchStyle, styleFromCs)
  })

export default useCss
