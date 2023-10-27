import type { Scheme } from '@material/material-color-utilities'
import colors from '../color'
import states from '../state'
import elevations from '../elevation'
import { typography } from '../typography'
import type ThemeMode from '../mode'

type ExtendedScheme = Scheme & {
  success: string
  info: string
  warning: string
}

export type Palette = Omit<Record<keyof ExtendedScheme, string>, 'toJSON'>

export interface ThemeConfig {
  mode?: ThemeMode
  palette?: Partial<Palette>
}

export const themePaletteColor: (keyof Palette)[] = [
  'primary',
  'onPrimary',
  'primaryContainer',
  'onPrimaryContainer',
  'secondary',
  'onSecondary',
  'secondaryContainer',
  'onSecondaryContainer',
  'tertiary',
  'onTertiary',
  'tertiaryContainer',
  'onTertiaryContainer',
  'error',
  'onError',
  'errorContainer',
  'onErrorContainer',
  'background',
  'onBackground',
  'surface',
  'onSurface',
  'surfaceVariant',
  'onSurfaceVariant',
  'outline',
  'outlineVariant',
  'shadow',
  'scrim',
  'inverseSurface',
  'inverseOnSurface',
  'inversePrimary',
  'success',
  'info',
  'warning',
]
export type ThemePaletteColor = Palette
export type ThemeCallBack = (theme: Theme) => string
export interface ParsedScheme {
  palette: Palette
  styles: Record<string, string>
}

export class Theme {
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
