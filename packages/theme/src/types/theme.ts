import type { CustomColor } from '@material/material-color-utilities'
import type { ThemeMode } from '../mode'
import type { Theme } from '../core'
import type { ThemeSchemes } from './shcemes'

export interface ThemeConfig {
  mode?: ThemeMode
  schemes?: Partial<ThemeSchemes>
  customColors?: CustomColor[]
}

export interface ThemeOptions {
  target: 'root' | 'host'
  config?: ThemeConfig
}

export type ThemeCallBack = (theme: Theme) => string

export type AcceptableColor = keyof ThemeSchemes | ThemeCallBack | string
