import { computed } from 'vue'
import { css, cx, useColor } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { DrawerProps } from './drawer'

const useCss: ComponentStylingHook<DrawerProps> = props =>
  computed(() => {
    const [$color] = useColor(props, 'background')
    const drawerStyle = css`
      --in-drawer-color: ${$color.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(drawerStyle, styleFromCs)
  })

export default useCss
