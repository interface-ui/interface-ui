import type { ComponentStylingHook } from '@interface-ui/utils'
import type { Slot } from 'vue'
import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { BadgeProps } from './badge'

const translate = {
  top: '-50%',
  bottom: '50%',
  right: '50%',
  left: '-50%',
}

const useCss: ComponentStylingHook<
  BadgeProps,
  { cssClass: string; badgePosition: string }
> = (props, ns, slots?: Slot<any>) => {
  const theme = useTheme()

  const badgeTokens = computed(() => {
    const { [theme.value.mode]: schemes } = useDynamicColor(props.color, theme)

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          onPrimary: schemes.onPrimary,
        }),
    )
  })

  const badgePosition = computed(() =>
    slots
      ? css`
          ${props.xAlign}: 0;
          ${props.yAlign}: 0;
          position: absolute;
          transform: scale(1)
            translate(
              ${props.overlap ? '0%' : (translate as any)[props.xAlign]},
              ${props.overlap ? '0%' : (translate as any)[props.yAlign]}
            );
        `
      : '',
  )

  const badgeSize = computed(() => {
    const isDot = props.variant === 'dot'
    return css`
      height: ${isDot ? '8px' : '20px'};
      min-width: ${isDot ? '8px' : '20px'};
      padding: ${isDot ? '0' : '6px'} !important;
    `
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  const cssClass = computed(() =>
    cx(
      badgeTokens.value,
      badgePosition.value,
      badgeSize.value,
      styleFromCs.value,
    ),
  )

  return computed(() => ({
    cssClass: cssClass.value,
    badgePosition: badgePosition.value,
  }))
}

export default useCss
