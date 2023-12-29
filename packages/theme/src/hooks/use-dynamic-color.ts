import { shallowReactive } from 'vue'
import { useTheme } from './use-theme'
import { ComponentSchemes } from '@/types'
import type { AcceptableColor } from '@/types'
import { rgbaFromHex } from '@/core'
import type { ThemeMode } from '@/mode'

/**
 * The function to generate the dynamic color for the component according to input color.
 *
 * @param {AcceptableColor} color - The source color to generate the dynamic color.
 * @return {{ light: ComponentSchemes; dark: ComponentSchemes }}
 */
export const useDynamicColor = (
  color: AcceptableColor,
): Record<ThemeMode, ComponentSchemes> & { source: string } => {
  if (!color) {
    return shallowReactive({ light: null, dark: null, source: color } as any)
  }

  const theme = useTheme()
  const computedColor = typeof color === 'function' ? color(theme.value) : color
  return shallowReactive({
    source: computedColor,
    light: ComponentSchemes.light(computedColor, theme.value),
    dark: ComponentSchemes.dark(computedColor, theme.value),
  })
}

/**
 * Calculate the RGB value of the color.
 * TIPS: The color should comes from the scheme of the theme or the component.
 */
export const useDynamicRgb = (color: string): string => {
  if (color.startsWith('var')) {
    return color.replace(')', '-rgb)')
  }

  if (color.startsWith('#')) {
    const { r, g, b } = rgbaFromHex(color)
    return `${r} ${g} ${b}`
  }

  return color
}
