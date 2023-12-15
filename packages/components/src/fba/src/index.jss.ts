import { computed } from 'vue'
import { css, useColor } from '@interface-ui/theme'
import type { ComponentStylingHook } from '../../../types'
import type { FbaProps } from './fba'

const useCss: ComponentStylingHook<FbaProps> = props =>
  computed(() => {
    const [$color, $onColor] = useColor(props, 'color')

    return css`
      --in-fba-color: ${$color.value};
      --in-fba-on-color: ${$onColor.value};
    `
  })

export default useCss
