import { computed } from 'vue'
import { css, cx } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { CardHeaderProps } from './card-header'

const useCss: ComponentStylingHook<CardHeaderProps> = props =>
  computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(styleFromCs)
  })

export default useCss
