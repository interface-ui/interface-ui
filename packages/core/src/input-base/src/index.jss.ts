import { computed } from 'vue'
import { css, cx } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { InputBaseProps } from './input-base'

const useCss: ComponentStylingHook<InputBaseProps> = props => {
  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  const internalStyle = css({
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

  return computed(() =>
    cx({ [internalStyle]: props.internal }, styleFromCs.value),
  )
}

export default useCss
