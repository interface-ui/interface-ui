/* eslint-disable @typescript-eslint/indent */
import { computed } from 'vue'
import { css, cx, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { InputBaseProps } from './input-base'

const useCss: ComponentStylingHook<InputBaseProps> = props => {
  const theme = useTheme()

  return computed(() => {
    const inputBaseStyle = css([
      {
        background: 'none',
        color: 'inherit',
      },
      theme.value.typography.body.large as any,
    ])
    const internalStyle = props.internal
      ? css({
          cursor: 'inherit',
          position: 'absolute',
          opacity: 0,
          width: '100%',
          height: '100%',
          top: '0px',
          left: '0px',
          margin: '0px',
          padding: '0px',
          zIndex: 1,
        })
      : ''

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(inputBaseStyle, { [internalStyle]: props.internal }, styleFromCs)
  })
}

export default useCss
