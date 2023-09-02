type Color<T extends MaterialDesignColorLevel | FusionColorLevel> = Record<
  T,
  string
>

type MaterialDesignColorLevel =
  | 0
  | 10
  | 20
  | 30
  | 40
  | 50
  | 60
  | 70
  | 80
  | 90
  | 95
  | 98
  | 99
  | 100
type FusionColorLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export interface Palette<
  M = Color<MaterialDesignColorLevel>,
  F = Color<FusionColorLevel>
> {
  primary: M
  secondary: M
  tertiary: M
  neutral: M & {
    variant: M
  }
  error: M
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
