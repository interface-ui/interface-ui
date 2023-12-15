import { computed } from 'vue'
import { css, cx, useColor } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from '../../../types'
import type { DrawerProps } from './drawer'

const useCss: ComponentStylingHook<DrawerProps> = props =>
  computed(() => {
    const [$color] = useColor(props, 'background')
    const drawerStyle = css`
      --fn-drawer-color: ${$color.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(drawerStyle, styleFromCs)
  })

export default useCss
