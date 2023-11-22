import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import type { ActionAreaProps } from './action-area'

const useCss: ComponentStylingHook<ActionAreaProps> = props =>
  computed(() => {
    const [$color] = useColor(props, 'color')
    const [$rgbColor] = useRgbColor(props, 'color')

    const actionAreaStyle = css`
      --fn-action-area-color: ${$color.value};
      --fn-action-area-color-rgb: ${$rgbColor.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(actionAreaStyle, styleFromCs)
  })

export default useCss
