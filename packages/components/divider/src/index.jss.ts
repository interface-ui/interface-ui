import type { ComponentStylingHook } from '@fusion-ui-vue/hooks/types'
import { computed } from 'vue'
import { css, cx } from '@fusion-ui-vue/theme'
import type { DividerProps } from './divider'

const useCss: ComponentStylingHook<DividerProps> = props =>
  computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(styleFromCs)
  })

export default useCss
