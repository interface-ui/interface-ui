import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import { computed, inject } from 'vue'
import type { ComponentStylingHook } from '@interface-ui/utils'
import { BUTTON_GROUP_PROVIDE_KEY } from '../../button-group'
import type { ButtonProps } from './button'
import { buttonHeight } from './button'

const useCss: ComponentStylingHook<ButtonProps> = (props, ns) => {
  const theme = useTheme()
  const injection = inject<ReturnType<typeof useDynamicColor>>(
    BUTTON_GROUP_PROVIDE_KEY,
    () => useDynamicColor(props.color),
    true,
  )

  const dynamicColor = computed(() =>
    injection.source === props.color ? injection : useDynamicColor(props.color),
  )

  const buttonTokens = computed(() => {
    const { [theme.value.mode]: schemes } = dynamicColor.value

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          primaryRgb: useDynamicRgb(schemes.primary),
          secondaryContainer: schemes.secondaryContainer,
          onSecondaryContainer: schemes.onSecondaryContainer,
          onPrimary: schemes.onPrimary,
          surfaceContainerLow: schemes.surfaceContainerLow,
          outline: schemes.outline,
        }),
    )
  })

  const buttonSize = computed(
    () => css`
      &.${ns!.m(props.size)} {
        height: ${buttonHeight[props.size]}px;
      }
    `,
  )

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() =>
    cx(buttonTokens.value, buttonSize.value, styleFromCs.value),
  )
}

export default useCss
