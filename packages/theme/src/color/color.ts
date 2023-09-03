type Color<T extends FusionColorLevel> = Record<T, string>

type FusionColorLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export interface Colors<F = Color<FusionColorLevel>> {
  black: string
  white: string
  slate: F
  gray: F
  zinc: F
  stone: F
  lime: F
  green: F
  emerald: F
  teal: F
  cyan: F
  sky: F
  blue: F
  indigo: F
  violet: F
  purple: F
  fuchsia: F
  pink: F
  rose: F
  red: F
  orange: F
  amber: F
  yellow: F
}
