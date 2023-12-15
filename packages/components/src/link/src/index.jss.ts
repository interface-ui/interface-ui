import { computed } from 'vue'
import { css, cx, useRgbColor } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from '../../../types'
import type { LinkProps } from './link'

const useCss: ComponentStylingHook<LinkProps> = props =>
  computed(() => {
    const [$colorRgb] = useRgbColor(props, 'color')
    const linkStyle = css`
      --fn-link-color-rgb: ${$colorRgb.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(linkStyle, styleFromCs)
  })

export default useCss
