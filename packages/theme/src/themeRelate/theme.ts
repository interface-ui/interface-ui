import type { Scheme } from '@material/material-color-utilities'
import type { State } from '../state/state'

export type Palette = Record<keyof Scheme, string>

export interface ThemeConfig {
  palette: Partial<Palette>
}

export default interface Theme {
  palette: Palette
  state: State
}
