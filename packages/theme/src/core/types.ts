import type { CustomColor, Scheme } from '@material/material-color-utilities'
import colors from '../color'
import states from '../state'
import elevations from '../elevation'
import typography from '../typography'
import zIndex from '../z-index'
import type ThemeMode from '../mode'

export type Palette = Omit<Record<keyof Scheme, string>, 'toJSON'>
export interface AdditionalPalette {
  success: string
  onSuccess: string
  successContainer: string
  onSuccessContainer: string
  warning: string
  onWarning: string
  warningContainer: string
  onWarningContainer: string
  info: string
  onInfo: string
  infoContainer: string
  onInfoContainer: string
}

export interface ThemeConfig {
  mode?: ThemeMode
  palette?: Partial<Palette>
  customColors?: CustomColor[]
}

export const themePaletteColor: (keyof (Palette & AdditionalPalette))[] = [
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
  'onSuccess',
  'successContainer',
  'onSuccessContainer',
  'warning',
  'onWarning',
  'warningContainer',
  'onWarningContainer',
  'info',
  'onInfo',
  'infoContainer',
  'onInfoContainer',
]
export type ThemePaletteColor = Palette
export type ThemeCallBack = (theme: Theme) => string
export interface ParsedScheme {
  palette: Palette | AdditionalPalette
  styles: Record<string, string>
}

export class Theme {
  mode: ThemeMode
  palette: Palette | AdditionalPalette
  colors = colors
  states = states
  elevations = elevations
  typography = typography
  zIndex = zIndex

  constructor(palette: Palette | AdditionalPalette, mode: ThemeMode = 'light') {
    this.palette = palette
    this.mode = mode
  }

  setMode(mode: ThemeMode) {
    this.mode = mode
  }
}
