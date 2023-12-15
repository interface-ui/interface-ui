import { computed } from 'vue'
import type { ComponentStylingHook } from '../../../types'
import { css, cx } from '@fusion-ui-vue/theme'
import type { __component__PascalCase__Props } from './__component__KebabCase__'

const useCss: ComponentStylingHook<__component__PascalCase__Props> = props =>
  computed(() => {
    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(styleFromCs)
  })

export default useCss
