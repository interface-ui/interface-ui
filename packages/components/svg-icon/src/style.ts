import type { ComponentStylingHook } from '@fusion-ui-vue/hooks/types'
import { computed } from 'vue'
import { css, cx, useColor, useTheme } from '@fusion-ui-vue/theme'
import type { SvgIconProps } from './svg-icon'

const useCss: ComponentStylingHook<SvgIconProps> = props =>
  computed(() => {
    const {
      typography: { pxToRem },
    } = useTheme().value
    const $color = useColor(props, 'color')

    let fontSize
    const _size = +props.size
    if (isNaN(_size)) {
      const [_, size, unit] = /(d+)(w+)/.exec(props.size as string) || []
      fontSize = unit === 'px' ? pxToRem(+size) : props.size
    } else {
      fontSize = pxToRem(_size)
    }

    const styleFromCs = props.cs ? css(props.cs) : ''
    return cx(
      css`
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        flex-shrink: 0;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-size: ${fontSize};
        color: ${$color.value};
      `,
      styleFromCs
    )
  })

export default useCss
