import type { Scheme } from '@material/material-color-utilities'
import type { States } from '../state/state'
import type { Colors } from '../color/color'
import type { Elevations } from '../elevation/elevation'
import type { Typography } from '../typography/typography'

export type Palette = Omit<Record<keyof Scheme, string>, 'toJSON'>

export interface ThemeConfig {
  palette: Partial<Palette>
}

export const themePaletteColor = ['primary', 'secondary', 'tertiary', 'error']
export type ThemePaletteColor = typeof themePaletteColor[number]
export type ThemeCallBack = (theme: Theme) => string
export interface ParsedScheme {
  palette: Palette
  styles: Record<string, string>
}

export default interface Theme {
  palette: Palette
  readonly colors: Colors
  readonly states: States
  readonly elevations: Elevations
  readonly typography: Typography
}
