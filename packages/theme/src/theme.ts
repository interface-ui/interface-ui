interface Color {
  [key: number]: string
  variant?: Omit<Color, 'variant'>
}

export interface Palette<T = Color> {
  primary: T
  secondary: T
  tertiary: T
  neutral: T
  error: T
  black: string
  white: string
  slate: T
  gray: T
  zinc: T
  stone: T
  lime: T
  green: T
  emerald: T
  teal: T
  cyan: T
  sky: T
  blue: T
  indigo: T
  violet: T
  purple: T
  fuchsia: T
  pink: T
  rose: T
  red: T
  orange: T
  amber: T
  yellow: T
}
