import { computed } from 'vue'
import { css, cx, useColor } from '@interface-ui/theme'
import type { ComponentStylingHook } from '../../../types'
import type { ListItemProps } from './list-item'

const useCss: ComponentStylingHook<ListItemProps> = props =>
  computed(() => {
    const [$highlightColor] = useColor(props, 'highlightColor')

    const listItemStyle = css`
      --in-list-item-highlight-color: ${$highlightColor.value};
      padding: 12px 16px 12px ${16 + +props.indent * 40}px;
      align-items: ${props.alignItems};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(listItemStyle, styleFromCs)
  })

export default useCss
