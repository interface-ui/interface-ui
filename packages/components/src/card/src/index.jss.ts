import { computed } from 'vue'
import { css, cx } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from '../../../types'
import type { CardProps } from './card'

const useCss: ComponentStylingHook<CardProps> = props =>
  computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(styleFromCs)
  })

export default useCss
