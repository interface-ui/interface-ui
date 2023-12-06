import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed, ref } from 'vue'
import { css, cx, useColor } from '@fusion-ui-vue/theme'
import type { TextFieldProps } from './text-field'

const useCss: ComponentStylingHook<TextFieldProps> = props =>
  computed(() => {
    const [$color] = props.error
      ? [ref('var(--md-sys-color-error)')]
      : useColor(props, 'color')

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(css({ '--fn-text-field-color': $color.value }), styleFromCs)
  })

export default useCss
