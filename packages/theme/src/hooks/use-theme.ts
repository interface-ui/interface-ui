import type { Ref } from 'vue'
import { inject } from 'vue'
import { type Theme, createTheme } from '../core'
import type ThemeMode from '../mode'

/**
 * Get the current theme object
 * @returns {Ref<Theme> } Theme object
 */
export const useTheme = (mode?: ThemeMode): Ref<Theme> => {
  const theme = inject<Ref<Theme>>(
    'ThemeContext',
    () => createTheme(undefined, { target: 'host', config: { mode } }),
    true
  )
  return theme as Ref<Theme>
}
