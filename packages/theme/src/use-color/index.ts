import type {
  ThemeCallBack,
  ThemePaletteColor,
} from '@fusion-ui/theme/src/use-theme/theme'
import useTheme from '@fusion-ui/theme/src/use-theme'
import { computed } from 'vue'

/**
 * The funtion to compute color from props
 * @param {ThemePaletteColor | string | ThemeCallBack} color
 * @return Return the computed string. The value can be CSS variable or color in hex
 */
const useColor = (color: ThemePaletteColor | string | ThemeCallBack) => {
  const theme = useTheme()
  return computed(() => {
    if (!color) {
      return null
    }
    if (typeof color === 'function') {
      return color(theme)
    }
    if (['primary', 'secondary', 'tertiary', 'error'].includes(color)) {
      return `var(--md-sys-color-${color})`
    }
    return color
  })
}

export default useColor
