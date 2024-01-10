import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { SvgIconProps } from './svg-icon'

const useCss: ComponentStylingHook<SvgIconProps> = props => {
  const theme = useTheme()

  const svgIconStyles = computed(() => {
    const {
      typography: { pxToRem },
    } = theme.value

    let fontSize
    const _size = +props.size
    if (isNaN(_size)) {
      const [_, size, unit] = /(d+)(w+)/.exec(props.size as string) || []
      fontSize = unit === 'px' ? pxToRem(+size) : props.size
    } else {
      fontSize = pxToRem(_size)
    }

    return css([
      {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        fontSize,
        color: useDynamicColor(props.color, theme).schemes.primary,
      },
      props.fill && {
        fill: useDynamicColor(props.fill, theme).schemes.primary,
      },
    ])
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(svgIconStyles.value, styleFromCs.value))
}

export default useCss
