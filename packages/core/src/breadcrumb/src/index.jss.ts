import { computed } from 'vue'
import { css, cx, useColor, useRgbColor } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { BreadcrumbProps } from './breadcrumb'

const useCss: ComponentStylingHook<BreadcrumbProps> = props =>
  computed(() => {
    const [$color] = useColor(props, 'color')
    const [$colorRgb] = useRgbColor(props, 'color')
    const breadcrumbStyle = css`
      --in-breadcrumb-color: ${$color.value};
      --in-breadcrumb-color-rgb: ${$colorRgb.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(breadcrumbStyle, styleFromCs)
  })

export default useCss
