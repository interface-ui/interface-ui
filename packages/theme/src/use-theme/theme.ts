import type { Scheme } from '@material/material-color-utilities'
import type { State } from '../state/state'
import type { Colors } from '../color/color'

export type Palette = Omit<Record<keyof Scheme, string>, 'toJSON'>

export interface ThemeConfig {
  palette: Partial<Palette>
}

export type ThemePaletteColor = 'primary' | 'secondary' | 'tertiary' | 'error'
export type ThemeCallBack = (theme: Theme) => string
export interface ParsedScheme {
  palette: Palette
  styles: Record<string, string>
}

export default interface Theme {
  palette: Palette
  readonly color: Colors
  readonly state: State
}
