import colors from '../color'
import states from '../state'
import elevations from '../elevation'
import typography from '../typography'
import zIndex from '../z-index'
import type ThemeMode from '../mode'
import type {
  AdditionalSchemes,
  Schemes,
  ThemePalettes,
  ThemeSchemes,
} from './types'

export default class Theme {
  mode: ThemeMode
  schemes: ThemeSchemes
  colors = colors
  states = states
  elevations = elevations
  typography = typography
  zIndex = zIndex
  palettes: ThemePalettes
  inject?: string

  constructor(
    schemes: Schemes & AdditionalSchemes,
    palettes: ThemePalettes,
    mode: ThemeMode = 'light',
    inject?: string
  ) {
    this.schemes = schemes
    this.mode = mode
    this.palettes = palettes
    this.inject = inject
  }

  setMode(mode: ThemeMode) {
    this.mode = mode
  }
}
