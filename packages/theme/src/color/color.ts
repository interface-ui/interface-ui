type Color<T extends FusionColorLevel> = Record<T, string>

type FusionColorLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type FusionColorExtensionLevel = 'A100' | 'A200' | 'A400' | 'A700'

export interface Colors<F = Color<FusionColorLevel>> {
  black: string
  white: string
  red: F & FusionColorExtensionLevel
  pink: F & FusionColorExtensionLevel
  purple: F & FusionColorExtensionLevel
  deepPurple: F & FusionColorExtensionLevel
  indigo: F & FusionColorExtensionLevel
  blue: F & FusionColorExtensionLevel
  lightBlue: F & FusionColorExtensionLevel
  cyan: F & FusionColorExtensionLevel
  teal: F & FusionColorExtensionLevel
  green: F & FusionColorExtensionLevel
  lightGreen: F & FusionColorExtensionLevel
  lime: F & FusionColorExtensionLevel
  yellow: F & FusionColorExtensionLevel
  amber: F & FusionColorExtensionLevel
  orange: F & FusionColorExtensionLevel
  deepOrange: F & FusionColorExtensionLevel
  brown: F
  grey: F
  blueGrey: F
}
