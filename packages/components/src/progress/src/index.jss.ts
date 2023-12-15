/* eslint-disable @typescript-eslint/indent */
import { computed } from 'vue'
import { css, cx, useColor } from '@fusion-ui-vue/theme'
import type { ComponentStylingHook } from '../../../types'
import type { ProgressProps } from './progress'

const useCss: ComponentStylingHook<
  ProgressProps,
  { cssClass: string; radius: number }
> = props =>
  computed(() => {
    const radius = 48 / 2 - 2
    const perimeter = 2 * Math.PI * radius
    const [$color] = useColor(props, 'color')

    const progressStyle = css([
      {
        '--fn-progress-color': $color.value,
        '--fn-progress-perimeter': perimeter,
      },
      props.variant === 'circular' &&
        props.status === 'indeterminate' && {
          animation:
            '1568.24ms linear 0s infinite normal none running progress-linear-rotate',
        },
      props.variant === 'linear' && {
        width: '100%',
      },
      {
        '@keyframes progress-circular-right': {
          '0%, 100%': { strokeDasharray: `5, ${perimeter - 5}` },
          '50%': { strokeDasharray: `${perimeter * 0.4}, ${perimeter * 0.6}` },
        },
        '@keyframes progress-circular-left': {
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
