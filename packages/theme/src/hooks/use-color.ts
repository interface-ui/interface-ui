import { useTheme } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import { type ThemeCallBack, type ThemePaletteColor } from '../core'

/**
 * The function to compute color from props
 * The props.color can be "primary" | "secondary" | "tertiary" | "error" | (theme: Theme) => string | "string"
 * Use this function to get the final color value
 * @param {ThemePaletteColor | string | ThemeCallBack} color
 * @param {[string]} defaultColor The default color
 * @return Return the computed string. The value can be CSS variable or color in hex
 */
export const useColor = (
  color: ThemePaletteColor | string | ThemeCallBack,
  defaultColor?: string
) => {
  const theme = useTheme()
  return computed(() => {
    if (!color) {
      return defaultColor ?? null
    }
    if (typeof color === 'function') {
      return color(theme.value)
    }
    if (typeof color === 'string' && color in theme.value.palette) {
      const _color = color.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      return `var(--md-sys-color-${_color})`
    }
    return color
  })
}
