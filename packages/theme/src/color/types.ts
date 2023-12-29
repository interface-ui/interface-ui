type Color<T extends string | number> = Record<T, string>

type FusionColorLevel = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
type FusionColorExtensionLevel = 'A100' | 'A200' | 'A400' | 'A700'

type ColorWithoutExtension = Color<FusionColorLevel>
type ColorWithExtension = Color<FusionColorLevel | FusionColorExtensionLevel>

export interface Colors {
  red: ColorWithExtension
  pink: ColorWithExtension
  purple: ColorWithExtension
  deepPurple: ColorWithExtension
  indigo: ColorWithExtension
  blue: ColorWithExtension
  lightBlue: ColorWithExtension
  cyan: ColorWithExtension
  teal: ColorWithExtension
  green: ColorWithExtension
  lightGreen: ColorWithExtension
  lime: ColorWithExtension
  yellow: ColorWithExtension
  amber: ColorWithExtension
  orange: ColorWithExtension
  deepOrange: ColorWithExtension
  brown: ColorWithoutExtension
  grey: ColorWithoutExtension
  blueGrey: ColorWithoutExtension
}
