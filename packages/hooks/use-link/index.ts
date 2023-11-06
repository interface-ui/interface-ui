import { css, useColor } from '@fusion-ui-vue/theme'
import type { LinkProps } from '@fusion-ui-vue/components'
import { computed } from 'vue'
import type { ComponentStylingHook } from '../types'

export const useLink: ComponentStylingHook<LinkProps> = props => {
  const [$color] = useColor(props, 'color')

  return computed(() => {
    return css`
      --fn-link-color: ${$color.value};
      --fn-link__underline--status: ${props.underline === 'none'
        ? 'none'
        : props.underline === 'hover'
        ? 'none'
        : 'underline'};
      --fn-link__underline--hover: ${props.underline === 'none'
        ? 'none'
        : props.underline === 'hover'
        ? 'underline'
        : 'underline'};
    `
  })
}
