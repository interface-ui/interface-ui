import { computed } from 'vue'
import { css, cx } from '@interface-ui/theme'
import type { ComponentStylingHook } from '../../../types'
import type { DialogProps } from './dialog'

const useCss: ComponentStylingHook<DialogProps> = props =>
  computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(styleFromCs)
  })

export default useCss
