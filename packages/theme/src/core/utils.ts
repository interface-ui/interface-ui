/* eslint-disable quote-props */
import { injectGlobal } from '@emotion/css'
import type {
  CustomColorGroup,
  Scheme,
} from '@material/material-color-utilities'
import { hexFromArgb, rgbaFromArgb } from '@material/material-color-utilities'
import type ThemeMode from '../mode'
import type { AdditionalPalette, Palette, ParsedScheme, Theme } from './types'

export const parseShceme = (scheme: Scheme): ParsedScheme => {
  const palette: Palette = {} as any
  const styles: Record<string, string> = {} as any
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = hexFromArgb(value)
    const { r, g, b } = rgbaFromArgb(value)
    palette[key as keyof Palette] = color
    styles[`--md-sys-color-${token}`] = color
    styles[`--md-sys-color-${token}-rgb`] = `${r}, ${g}, ${b}`
  }

  return { palette, styles }
}

export const parseCustomScheme = (
  schemes: CustomColorGroup[],
  mode: ThemeMode
) => {
  const palette: AdditionalPalette = {} as any
  const styles: Record<string, string> = {} as any

  schemes.forEach(scheme => {
    const { name } = scheme.color
    const _palette = mode === 'light' ? scheme.light : scheme.dark
    for (const [key, value] of Object.entries(_palette)) {
      const _key = key.startsWith('on')
        ? key.replace('Color', `${name[0].toUpperCase()}${name.slice(1)}`)
        : key.replace('color', name)
      const token = _key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      const color = hexFromArgb(value)
      const { r, g, b } = rgbaFromArgb(value)
      palette[_key as keyof AdditionalPalette] = color
      styles[`--md-sys-color-${token}`] = color
      styles[`--md-sys-color-${token}-rgb`] = `${r}, ${g}, ${b}`
    }
  })

  return { palette, styles }
}

export const mergeParsedScheme = (...args: ParsedScheme[]): ParsedScheme => {
  const palette: Palette = {} as any
  const styles: Record<string, string> = {} as any

  args.forEach(parsedScheme => {
    Object.assign(palette, parsedScheme.palette)
    Object.assign(styles, parsedScheme.styles)
  })

  return { palette, styles }
}

export const injectJSS = (
  lightPalette: ParsedScheme,
  darkPalette: ParsedScheme,
  theme: Theme
) => {
  const { fontFamily, htmlFontSize } = theme.typography

  // Init style
  injectGlobal({
    ':root': {
      colorScheme: 'light',
      ...lightPalette?.styles,
    },
    ':root[data-theme="dark"]': {
      colorScheme: 'dark',
      ...darkPalette?.styles,
    },
    html: {
      fontSize: htmlFontSize,
    },
    body: {
      fontFamily,
      color: 'var(--md-sys-color-on-surface)',
      fontSize: '1rem',
    },
  })
}
