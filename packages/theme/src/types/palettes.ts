import type { Theme as DynamicTheme } from '@material/material-color-utilities'

export type ThemePalettesTones =
  | '0'
  | '10'
  | '20'
  | '30'
  | '40'
  | '50'
  | '60'
  | '70'
  | '80'
  | '90'
  | '95'
  | '99'
  | '100'
export type ThemePalettes = Record<
  keyof DynamicTheme['palettes'],
  Record<ThemePalettesTones, string>
> & { [k: string]: Record<ThemePalettesTones, string> }
