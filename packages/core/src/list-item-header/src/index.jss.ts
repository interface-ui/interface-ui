import { computed } from 'vue'
import { css, cx } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { ListItemHeaderProps } from './list-item-header'

const useCss: ComponentStylingHook<ListItemHeaderProps> = props =>
  computed(() => {
    const listItemHeaderStyle = css`
      padding: 12px 16px 12px ${16 + +props.indent * 24}px;
    `
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(listItemHeaderStyle, styleFromCs)
  })

export default useCss
