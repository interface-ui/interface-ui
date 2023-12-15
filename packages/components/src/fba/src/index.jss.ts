import { computed } from 'vue'
import { css, useColor } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from '../../../types'
import type { FbaProps } from './fba'

const useCss: ComponentStylingHook<FbaProps> = props =>
  computed(() => {
    const [$color, $onColor] = useColor(props, 'color')

    return css`
      --fn-fba-color: ${$color.value};
      --fn-fba-on-color: ${$onColor.value};
    `
  })

export default useCss
