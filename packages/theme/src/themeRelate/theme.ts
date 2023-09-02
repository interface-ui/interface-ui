export interface PaletteConfig {
  primary: string
  primaryContainer: string
  onPrimary: string
  onPrimaryContainer: string
  inversePrimary: string
  secondary: string
  secondaryContainer: string
  onSecondary: string
  onSecondaryContainer: string
  tertiary: string
  tertiaryContainer: string
  onTeriary: string
  onTeriaryContainer: string
  surface: string
  surfaceVariant: string
  onSurface: string
  onSurfaceVariant: string
  inverseSurface: string
  inverseOnSurface: string
  surfaceTint: string
  surfaceTintColor: string
  background: string
  onBackground: string
  outline: string
  error: string
  errorContainer: string
  onError: string
  onErrorContainer: string
  shadow: string
}

export default interface Theme {
  palette: Partial<PaletteConfig>
}
