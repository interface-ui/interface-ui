import colors from '../color'
import states from '../state'
import elevations from '../elevation'
import typography from '../typography'
import motion from '../motion'
import zIndex from '../z-index'
import type { ThemeMode } from '../mode'
import type { ThemePalettes, ThemeSchemes } from '../types'
import type { ParsedSchemes } from './types'

export default class Theme {
  mode: ThemeMode
  readonly schemes: ThemeSchemes
  readonly colors = colors
  readonly states = states
  readonly elevations = elevations
  readonly typography = typography
  readonly zIndex = zIndex
  readonly motion = motion
  readonly palettes: ThemePalettes
  readonly inject?: string
  readonly target: 'root' | 'host'
  readonly _lightSchemes: ParsedSchemes
  readonly _darkSchemes: ParsedSchemes

  constructor(
    schemes: ThemeSchemes,
    palettes: ThemePalettes,
    mode: ThemeMode = 'light',
    lightSchemes: ParsedSchemes,
    darkSchemes: ParsedSchemes,
    target: 'root' | 'host',
  ) {
    this.schemes = schemes
    this.mode = mode
    this.palettes = palettes
    this._lightSchemes = lightSchemes
    this._darkSchemes = darkSchemes
    this.target = target
  }

  toggleMode(): void {
    this.mode = this.mode === 'light' ? 'dark' : 'light'
  }
}
