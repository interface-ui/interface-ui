import type { Scheme } from '@material/material-color-utilities'
import type { GenerateCustomSchemes } from './custom-schemes'

export type Schemes = Omit<Record<keyof Scheme, string>, 'toJSON'>

export type SeveritySchemes = GenerateCustomSchemes<
  'success' | 'info' | 'warning' | 'error'
>

export type ThemeSchemes = Schemes & SeveritySchemes