import { computed } from 'vue'
import {
  css,
  cx,
  useDynamicColor,
  useDynamicRgb,
  useTheme,
} from '@interface-ui/theme'
import { type ComponentStylingHook, useNamespace } from '@interface-ui/utils'
import type { ChipProps } from './chip'

const useCss: ComponentStylingHook<ChipProps> = (
  props,
  ns,
  isSurfaceColor: boolean,
) => {
  const theme = useTheme()
  const iconButtonNs = useNamespace('icon-button')

  const chipTokens = computed(() => {
    const { schemes } = useDynamicColor(props.color, theme)

    return css([
      schemes &&
        ns!.cssVarBlock({
          primary: schemes.primary,
          onPrimary: isSurfaceColor
            ? ns!.getGlobalTokens('color', 'onSurfaceVariant')
            : schemes.onPrimary,
        }),
      {
        '&.in-chip--filled': {
          ...ns!.cssVarBlock({
            onPrimary: isSurfaceColor
              ? ns!.getGlobalTokens('color', 'onSurfaceVariant')
              : schemes.onPrimary,
          }),
          '& .in-icon-button': iconButtonNs!.cssVarBlock({
            primary: isSurfaceColor
              ? ns!.getGlobalTokens('color', 'onSurfaceVariant')
              : schemes.onPrimary,
            primaryRgb: isSurfaceColor
              ? ns!.getGlobalTokens('color', 'onSurfaceVariantRgb')
              : useDynamicRgb(schemes.onPrimary),
          }),
        },
      },
      {
        '&.in-chip--outlined': {
          ...ns!.cssVarBlock({
            onPrimary: isSurfaceColor
              ? ns!.getGlobalTokens('color', 'onSurfaceVariant')
              : schemes.primary,
          }),
          // eslint-disable-next-line quote-props
          borderColor: isSurfaceColor
            ? 'var(--md-sys-color-outline)'
            : schemes.primary,
          '& .in-icon-button': iconButtonNs!.cssVarBlock({
            primary: isSurfaceColor
              ? ns!.getGlobalTokens('color', 'onSurfaceVariant')
              : schemes.primary,
            primaryRgb: isSurfaceColor
              ? ns!.getGlobalTokens('color', 'onSurfaceVariantRgb')
              : useDynamicRgb(schemes.primary),
          }),
        },
      },
    ])
  })

  const styleFromCs = computed(() => (props.cs ? css(props.cs) : ''))

  return computed(() => cx(chipTokens.value, styleFromCs.value))
}

export default useCss
