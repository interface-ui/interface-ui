import type { Scheme } from '@material/material-color-utilities'
import type { GenerateCustomSchemes } from './custom-shcemes'

export type Schemes = Omit<Record<keyof Scheme, string>, 'toJSON'>

export type SeveritySchemes = GenerateCustomSchemes<
  'success' | 'info' | 'warning'
>

export type ThemeSchemes = Schemes & SeveritySchemes
