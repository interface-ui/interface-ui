import type { Ref } from 'vue'
import { computed } from 'vue'
import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import type { ComponentStylingHook } from '@interface-ui/utils'
import type { BreadcrumbProps } from './breadcrumb'

const useCss: ComponentStylingHook<
  BreadcrumbProps,
  { cssClass: string; dynamicColor: Ref<ReturnType<typeof useDynamicColor>> }
> = (props, ns) => {
  const theme = useTheme()
  const dynamicColor = computed<ReturnType<typeof useDynamicColor>>(() => {
    return useDynamicColor(props.color, theme)
  })

  const breadcrumbTokens = computed(() => {
    const { schemes } = dynamicColor.value

    return css(
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          primaryRgb: useDynamicRgb(schemes.primary),
        }),
    )
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => ({
    cssClass: cx(breadcrumbTokens.value, styleFromCs.value),
    dynamicColor,
  }))
}

export default useCss
