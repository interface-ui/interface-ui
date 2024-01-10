import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { ProgressProps } from './progress'

const useCss: ComponentStylingHook<
  ProgressProps,
  { cssClass: string; radius: number }
> = (props, ns) => {
  const theme = useTheme()
  const radius = 48 / 2 - 2
  const perimeter = 2 * Math.PI * radius

  const progressTokens = computed(() => {
    const { schemes } = useDynamicColor(props.color, theme)

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          perimeter,
        }),
    )
  })

  const circularProgressStyles = computed(
    () => css`
      animation: 1568.24ms linear 0s infinite normal none running
        progress-linear-rotate;
    `,
  )
  const linearProgressStyles = computed(
    () => css`
      width: 100%;
    `,
  )

  const progressKeyframes = css({
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
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => ({
    cssClass: cx(
      progressTokens.value,
      {
        [circularProgressStyles.value]:
          props.variant === 'circular' && props.status === 'indeterminate',
      },
      { [linearProgressStyles.value]: props.variant === 'linear' },
      progressKeyframes,
      styleFromCs.value,
    ),
    radius,
  }))
}

export default useCss
