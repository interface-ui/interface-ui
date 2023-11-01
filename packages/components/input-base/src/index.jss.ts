import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useTheme } from '@fusion-ui-vue/theme'
import type { InputBaseProps } from './input-base'

const useCss: ComponentStylingHook<InputBaseProps> = props =>
  computed(() => {
    const theme = useTheme()

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      css`
        background: none;
        color: inherit;
      `,
      css(theme.value.typography.body.large as any),
      styleFromCs
    )
  })

export default useCss
