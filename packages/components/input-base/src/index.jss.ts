import type { ComponentStylingHook } from 'packages/hooks/types'
import { computed } from 'vue'
import { css, cx, useTheme } from '@fusion-ui-vue/theme'
import type { InputBaseProps } from './input-base'

const useCss: ComponentStylingHook<InputBaseProps> = props =>
  computed(() => {
    const theme = useTheme()

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      css([
        {
          background: 'none',
          color: 'inherit',
        },
        theme.value.typography.body.large as any,
        props.internal && {
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: '0px',
          left: '0px',
          margin: '0px',
          padding: '0px',
          Zndex: 1,
        },
      ]),
      styleFromCs
    )
  })

export default useCss
