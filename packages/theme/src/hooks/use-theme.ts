import type { Ref } from 'vue'
import { inject, ref } from 'vue'
import type { Theme } from '../core'

/**
 * Get the current theme object
 * @returns {Ref<Theme> } Theme object
 */
export const useTheme = (): Ref<Theme> => {
  const theme = inject<Ref<Theme>>('ThemeContext') ?? ref(null)
  return theme as Ref<Theme>
}
