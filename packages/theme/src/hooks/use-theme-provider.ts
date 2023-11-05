import type { Ref } from 'vue'
import { provide } from 'vue'
import type { Theme } from '../core'

/**
 * The hook to provide theme obj to the child components
 * @param {Ref<Theme>} theme The theme obj
 */
export const useThemeProvider = (theme: Ref<Theme>) => {
  provide('ThemeContext', theme)
}
