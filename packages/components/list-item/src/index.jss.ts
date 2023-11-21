import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx } from '@fusion-ui-vue/theme'
import type { ListItemProps } from './list-item'

const useCss: ComponentStylingHook<ListItemProps> = props =>
  computed(() => {
    const listItemStyle = css`
      padding: 12px 16px 12px ${16 + props.indent * 24}px;
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(listItemStyle, styleFromCs)
  })

export default useCss
