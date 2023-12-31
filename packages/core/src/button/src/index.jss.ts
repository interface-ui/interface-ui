import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import type { Ref } from 'vue'
import { computed, inject, ref } from 'vue'
import type { ComponentStylingHook } from '@interface-ui/utils'
import { BUTTON_GROUP_PROVIDE_KEY } from '../../button-group'
import type { ButtonProps } from './button'
import { buttonHeight } from './button'

const useCss: ComponentStylingHook<ButtonProps> = (props, ns) => {
  const theme = useTheme()
  let dynamicColor = inject<Ref<ReturnType<typeof useDynamicColor>>>(
    BUTTON_GROUP_PROVIDE_KEY,
    () => ref(useDynamicColor(props.color)),
    true,
  )

  const buttonTokens = computed(() => {
    if (dynamicColor.value?.source !== props.color) {
      dynamicColor = ref(useDynamicColor(props.color))
    }

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
