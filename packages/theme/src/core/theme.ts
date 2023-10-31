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

  constructor(
    schemes: Schemes & AdditionalSchemes,
    palettes: ThemePalettes,
    mode: ThemeMode = 'light'
  ) {
    this.schemes = schemes
    this.mode = mode
    this.palettes = palettes
  }

  setMode(mode: ThemeMode) {
    this.mode = mode
  }
}
