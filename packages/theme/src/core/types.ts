import type {
  CustomColor,
  Theme as DynamicTheme,
  Scheme,
} from '@material/material-color-utilities'
import type ThemeMode from '../mode'
import type Theme from './theme'

export type Schemes = Omit<Record<keyof Scheme, string>, 'toJSON'>
export interface AdditionalSchemes {
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
  schemes?: Partial<Schemes>
  customColors?: CustomColor[]
}

export interface ThemeOptions {
  target: 'root' | 'host'
  config?: ThemeConfig
}

export const themeSchemes: (keyof (Schemes & AdditionalSchemes))[] = [
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
export type ThemeSchemes = Schemes & AdditionalSchemes
export const themePalettesTones = [
  '0',
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '95',
  '99',
  '100',
] as const
export type ThemePalettesTones = typeof themePalettesTones[number]
export type ThemePalettes = Record<
  keyof DynamicTheme['palettes'],
  Record<ThemePalettesTones, string>
> & { [k: string]: Record<ThemePalettesTones, string> }

export type ThemeCallBack = (theme: Theme) => string
export interface ParsedSchemes {
  schemes: Schemes | AdditionalSchemes
  styles: Record<string, string>
}
export type AcceptableColor = keyof ThemeSchemes | string | ThemeCallBack
