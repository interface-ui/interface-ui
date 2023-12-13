/* eslint-disable @typescript-eslint/indent */
import type { ComponentStylingHook } from 'packages/hooks/types'
import { isStringNumber } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { isNumber } from '@vueuse/core'
import { css, cx, useColor } from '@fusion-ui-vue/theme'
import type { ProgressProps } from './progress'

const useCss: ComponentStylingHook<
  ProgressProps,
  { cssClass: string; radius: number }
> = props =>
  computed(() => {
    let radius = 0
    if (isNumber(props.size) || isStringNumber(props.size)) {
      radius = +props.size / 2 - 2
    } else {
      const [size] = props.size.match(/\d+/g) || [48]
      radius = +size / 2 - 2
    }
    const perimeter = 2 * Math.PI * radius
    const [$color] = useColor(props, 'color')

    const progressStyle = css([
      {
        '--fn-progress-color': $color.value,
        '--fn-progress-perimeter': perimeter,
      },
      props.variant === 'circle' &&
        props.status === 'indeterminate' && {
          animation:
            '1568.24ms linear 0s infinite normal none running progress-linear-rotate',
        },
      props.variant === 'linear' && {
        width: '100%',
      },
      {
        '@keyframes progress-circle-right': {
          '0%, 100%': { strokeDasharray: `5, ${perimeter - 5}` },
          '50%': { strokeDasharray: `${perimeter * 0.4}, ${perimeter * 0.6}` },
        },
        '@keyframes progress-circle-left': {
          '0%, 100%': {
            strokeDasharray: `5, ${perimeter - 5}`,
            strokeDashoffset: `${perimeter * 2 + 5}`,
          },
          '50%': {
            strokeDasharray: `${perimeter * 0.4}, ${perimeter * 0.6}`,
            strokeDashoffset: `${perimeter * 2.4}`,
          },
        },
      },
    ])

    const styleFromCs = props.cs ? css(props.cs) : ''
    return { cssClass: cx(progressStyle, styleFromCs), radius }
  })

export default useCss
