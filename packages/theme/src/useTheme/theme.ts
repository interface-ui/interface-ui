import type { Scheme } from '@material/material-color-utilities'
import type { State } from '../state/state'
import type { Colors } from '../color/color'

export type Palette = Record<keyof Scheme, string>

export interface ThemeConfig {
  palette: Partial<Palette>
}

export default interface Theme {
  palette: Palette
  color: Colors
  state: State
}
