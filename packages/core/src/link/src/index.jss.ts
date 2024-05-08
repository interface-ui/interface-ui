import type { Ref } from 'vue'
import { computed, inject, ref } from 'vue'
import type { UseDynamicColorReturn } from '@interface-ui/theme'
import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import { BREADCRUMB_PROVIDE_KEY } from '../../breadcrumb'
import type { LinkProps } from './link'

const useCss: ComponentStylingHook<LinkProps> = (props, ns) => {
  const theme = useTheme()
  const injection = inject<Ref<UseDynamicColorReturn | null>>(
    BREADCRUMB_PROVIDE_KEY,
    ref(null),
  )

  const linkTokens = computed(() => {
    const dynamicColor =
      injection?.value?.source === props.color
        ? injection.value
        : useDynamicColor(props.color, theme)

    const { schemes } = dynamicColor

    return css(
      schemes &&
        ns!.cssVarBlock({
          primaryRgb: useDynamicRgb(schemes.primary),
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(linkTokens.value, styleFromCs.value))
}

export default useCss
