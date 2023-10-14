import type { Scheme } from '@material/material-color-utilities'
import colors from '../color'
import states from '../state'
import elevations from '../elevation'
import { typography } from '../typography'
import type ThemeMode from '../mode'

export type Palette = Omit<Record<keyof Scheme, string>, 'toJSON'>

export interface ThemeConfig {
  mode?: ThemeMode
  palette?: Partial<Palette>
}

export const themePaletteColor = ['primary', 'secondary', 'tertiary', 'error']
export type ThemePaletteColor = typeof themePaletteColor[number]
export type ThemeCallBack = (theme: Theme) => string
export interface ParsedScheme {
  palette: Palette
  styles: Record<string, string>
}

export default class Theme {
  mode: ThemeMode
  palette: Palette
  colors = colors
  states = states
  elevations = elevations
  typography = typography

  constructor(palette: Palette, mode: ThemeMode = 'light') {
    this.palette = palette
    this.mode = mode
  }

  setMode(mode: ThemeMode) {
    this.mode = mode
  }
}
