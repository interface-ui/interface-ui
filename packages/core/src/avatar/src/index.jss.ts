import { computed } from 'vue'
import { css, cx, useColor } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { AvatarProps } from './avatar'

const useCss: ComponentStylingHook<AvatarProps> = props =>
  computed(() => {
    const [backgroundColor] = useColor(props, 'background')
    const [textColor] = useColor(props, 'color')

    const avatarStyle = css`
      height: ${props.size}px;
      width: ${props.size}px;
      min-width: ${props.size}px;
      background-color: ${backgroundColor.value};
      color: ${textColor.value};
    `

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(avatarStyle, styleFromCs)
  })

export default useCss
