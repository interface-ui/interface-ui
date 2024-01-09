import type { Ref } from 'vue'
import { ComponentSchemes } from '@/types'
import type { AcceptableColor } from '@/types'
import type { Theme } from '@/core'
import { rgbaFromHex } from '@/core'
import type { ThemeMode } from '@/mode'

type UseDynamicColorReturn = Record<
  ThemeMode,
  Omit<ComponentSchemes, 'props'>
> & {
  source: AcceptableColor
  computedColor: string
}

/**
 * The function to generate the dynamic color for the component according to input color.
 *
 * @param {AcceptableColor} color - The source color to generate the dynamic color.
 * @return {{ light: ComponentSchemes; dark: ComponentSchemes }}
 */
export const useDynamicColor = (
  color: AcceptableColor,
  theme: Ref<Theme>,
): UseDynamicColorReturn => {
  if (!color) {
    return {
      light: null,
      dark: null,
      source: color,
      computedColor: color,
    } as any
  }

  const computedColor = typeof color === 'function' ? color(theme.value) : color
  return {
    source: color,
    computedColor,
    light: ComponentSchemes.light(computedColor, theme.value),
    dark: ComponentSchemes.dark(computedColor, theme.value),
  }
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
