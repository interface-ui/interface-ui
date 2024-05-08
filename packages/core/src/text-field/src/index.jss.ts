import { computed } from 'vue'
import { css, cx, useDynamicColor, useTheme } from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { TextFieldProps } from './text-field'

const useCss: ComponentStylingHook<TextFieldProps> = (props, ns) => {
  const theme = useTheme()

  const textFieldTokens = computed(() => {
    const { schemes } = useDynamicColor(
      props.error ? 'error' : props.color,
      theme,
    )

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(textFieldTokens.value, styleFromCs.value))
}

export default useCss
