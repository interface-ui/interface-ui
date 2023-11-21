import colors from '../color'
import states from '../state'
import elevations from '../elevation'
import typography from '../typography'
import motion from '../motion'
import zIndex from '../z-index'
import type ThemeMode from '../mode'
import type {
  AdditionalSchemes,
  ParsedSchemes,
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
  motion = motion
  palettes: ThemePalettes
  inject?: string
  target: 'root' | 'host'
  readonly _lightSchemes: ParsedSchemes
  readonly _darkSchemes: ParsedSchemes

  constructor(
    schemes: Schemes & AdditionalSchemes,
    palettes: ThemePalettes,
    mode: ThemeMode = 'light',
    lightSchemes: ParsedSchemes,
    darkSchemes: ParsedSchemes,
    target: 'root' | 'host'
  ) {
    this.schemes = schemes
    this.mode = mode
    this.palettes = palettes
    this._lightSchemes = lightSchemes
    this._darkSchemes = darkSchemes
    this.target = target
  }

  setMode(mode: ThemeMode) {
    this.mode = mode
  }
}
