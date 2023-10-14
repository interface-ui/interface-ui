import { useTheme } from '@fusion-ui-vue/theme'
import { computed } from 'vue'
import {
  type ThemeCallBack,
  type ThemePaletteColor,
  themePaletteColor,
} from '../core'

/**
 * The function to compute color from props
 * The props.color can be "primary" | "secondary" | "tertiary" | "error" | (theme: Theme) => string | "string"
 * Use this function to get the final color value
 * @param {ThemePaletteColor | string | ThemeCallBack} color
 * @return Return the computed string. The value can be CSS variable or color in hex
 */
export const useColor = (color: ThemePaletteColor | string | ThemeCallBack) => {
  const theme = useTheme()
  return computed(() => {
    if (!color) {
      return null
    }
    if (typeof color === 'function') {
      return color(theme.value)
    }
    if (themePaletteColor.includes(color)) {
      return `var(--md-sys-color-${color})`
    }
    return color
  })
}
