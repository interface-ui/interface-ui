import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx } from '@fusion-ui-vue/theme'
import type { PopoverProps } from './popover'

const useCss: ComponentStylingHook<PopoverProps> = props =>
  computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(styleFromCs)
  })

export default useCss
