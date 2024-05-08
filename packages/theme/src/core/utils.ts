/* eslint-disable quote-props */
import { css, injectGlobal } from '@emotion/css'
import type {
  CustomColor,
  CustomColorGroup,
  Theme as DynamicTheme,
  Rgba,
  Scheme,
} from '@material/material-color-utilities'
import {
  CorePalette,
  argbFromHex,
  hexFromArgb,
  rgbaFromArgb,
} from '@material/material-color-utilities'
import type { ThemeMode } from '../mode'
import type {
  Schemes,
  SeveritySchemes,
  ThemePalettes,
  ThemePalettesTones,
} from '../types'
import type { ParsedSchemes } from './types'
import type Theme from './theme'

const themePalettesTones: ThemePalettesTones[] = [
  '0',
  '10',
  '20',
  '30',
  '40',
  '50',
  '60',
  '70',
  '80',
  '90',
  '95',
  '99',
  '100',
]

export const parsePalettes = (
  palette: DynamicTheme['palettes'],
): ThemePalettes => {
  const palettes = {} as ThemePalettes
  for (const [color, tones] of Object.entries(palette)) {
    const obj = {} as Record<ThemePalettesTones, string>
    themePalettesTones.forEach(
      toneKey =>
        (obj[toneKey as ThemePalettesTones] = hexFromArgb(
          tones.tone(+toneKey),
        )),
    )
    palettes[color as keyof DynamicTheme['palettes']] = obj
  }

  return palettes
}

export const createCustomPalettes = (customColors: CustomColor[]) => {
  const palettes = {} as any
  customColors.forEach(color => {
    const { name, value } = color
    const tones = CorePalette.of(value).a1

    const obj = {} as Record<ThemePalettesTones, string>
    themePalettesTones.forEach(
      toneKey =>
        (obj[toneKey as ThemePalettesTones] = hexFromArgb(
          tones.tone(+toneKey),
        )),
    )
    palettes[name.toLowerCase()] = obj
  })

  return palettes
}

export const parseSchemes = (scheme: Scheme): ParsedSchemes => {
  const schemes: Schemes = {} as any
  const styles: Record<string, string> = {} as any
  for (const [key, value] of Object.entries(scheme.toJSON())) {
    const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = hexFromArgb(value)
    const { r, g, b } = rgbaFromArgb(value)
    schemes[key as keyof Schemes] = color
    styles[`--md-sys-color-${token}`] = color
    styles[`--md-sys-color-${token}-rgb`] = `${r} ${g} ${b}`
  }

  return { schemes, styles }
}

export const parseCustomSchemes = (
  scheme: CustomColorGroup[],
  mode: ThemeMode,
): ParsedSchemes => {
  const schemes: SeveritySchemes = {} as any
  const styles: Record<string, string> = {} as any

  scheme.forEach(scheme => {
    const { name } = scheme.color
    const _palette = mode === 'light' ? scheme.light : scheme.dark
    for (const [key, value] of Object.entries(_palette)) {
      const _key = key.startsWith('on')
        ? key.replace('Color', `${name[0].toUpperCase()}${name.slice(1)}`)
        : key.replace('color', name)
      const token = _key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      const color = hexFromArgb(value)
      const { r, g, b } = rgbaFromArgb(value)
      schemes[_key as keyof SeveritySchemes] = color
      styles[`--md-sys-color-${token}`] = color
      styles[`--md-sys-color-${token}-rgb`] = `${r} ${g} ${b}`
    }
  })

  return { schemes, styles }
}

/**
 * Merge the parsed schemes into one object
 * @param {ParsedSchemes[]} args The parsed schemes
 * @returns {ParsedSchemes} The merged parsed schemes
 */
export const mergeParsedSchemes = (...args: ParsedSchemes[]): ParsedSchemes => {
  const schemes: Schemes = {} as any
  const styles: Record<string, string> = {} as any

  args.forEach(parsedScheme => {
    Object.assign(schemes, parsedScheme.schemes)
    Object.assign(styles, parsedScheme.styles)
  })

  return { schemes, styles }
}

/**
 * Inject the schemes to the target element
 * @param {'root' | 'host'} target The target element to inject the schemes
 * root: the root element (html) of the document
 * host: the current element (the theme provider component)
 * @param {ParsedSchemes} lightSchemes The light schemes
 * @param {ParsedSchemes} darkSchemes The dark schemes
 * @param {Theme} theme The theme object
 */
export const injectJSS = (
  target: 'root' | 'host',
  lightSchemes: ParsedSchemes,
  darkSchemes: ParsedSchemes,
  theme: Theme,
) => {
  const { fontFamily, htmlFontSize } = theme.typography

  let injectCss: string | undefined
  if (target === 'root') {
    injectGlobal({
      ':root': {
        colorScheme: 'light',
        ...lightSchemes?.styles,
      },
      ':root[data-theme="dark"]': {
        colorScheme: 'dark',
        ...darkSchemes?.styles,
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
  } else {
    injectCss = css({
      ...lightSchemes?.styles,

      '&[data-theme="dark"]': {
        ...darkSchemes?.styles,
      },
    })
  }
  return injectCss
}

export interface NewSchemes {
  surfaceDim: number
  surface: number
  surfaceBright: number
  surfaceContainerLowest: number
  surfaceContainerLow: number
  surfaceContainer: number
  surfaceContainerHigh: number
  surfaceContainerHighest: number
  onSurface: number
  onSurfaceVariant: number
  outline: number
  outlineVariant: number
}
export interface AdditionalThemeSchemes {
  light: NewSchemes
  dark: NewSchemes
}
export interface ParsedNewSchemes {
  schemes: Record<keyof NewSchemes, string>
  styles: Record<string, string>
}
/**
 * The hrlper function to create the new scheme according to latest version Material Design Color System
 * expecially the "Surface" series
 * @link https://m3.material.io/styles/color/static/baseline#690f18cd-d40f-4158-a358-4cfdb3a32768
 * @param {DynamicTheme} dynamicTheme The dynamic theme object
 */
export const newSchemes = (
  dynamicTheme: DynamicTheme,
): AdditionalThemeSchemes => {
  const {
    palettes: { neutral, neutralVariant },
  } = dynamicTheme
  return {
    light: {
      surfaceDim: neutral.tone(87),
      surface: neutral.tone(98),
      surfaceBright: neutral.tone(98),
      surfaceContainerLowest: neutral.tone(100),
      surfaceContainerLow: neutral.tone(96),
      surfaceContainer: neutral.tone(94),
      surfaceContainerHigh: neutral.tone(92),
      surfaceContainerHighest: neutral.tone(90),
      onSurface: neutral.tone(10),
      onSurfaceVariant: neutralVariant.tone(30),
      outline: neutralVariant.tone(50),
      outlineVariant: neutralVariant.tone(80),
    },
    dark: {
      surfaceDim: neutral.tone(6),
      surface: neutral.tone(6),
      surfaceBright: neutral.tone(24),
      surfaceContainerLowest: neutral.tone(4),
      surfaceContainerLow: neutral.tone(10),
      surfaceContainer: neutral.tone(12),
      surfaceContainerHigh: neutral.tone(17),
      surfaceContainerHighest: neutral.tone(22),
      onSurface: neutral.tone(90),
      onSurfaceVariant: neutralVariant.tone(80),
      outline: neutralVariant.tone(60),
      outlineVariant: neutralVariant.tone(30),
    },
  }
}

export const parsedNewSchemes = (scheme: NewSchemes): ParsedNewSchemes => {
  const schemes: Record<keyof NewSchemes, string> = {} as any
  const styles: Record<string, string> = {} as any
  for (const [key, value] of Object.entries(scheme)) {
    const token = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const color = hexFromArgb(value)
    const { r, g, b } = rgbaFromArgb(value)
    schemes[key as keyof NewSchemes] = color
    styles[`--md-sys-color-${token}`] = color
    styles[`--md-sys-color-${token}-rgb`] = `${r} ${g} ${b}`
  }

  return { schemes, styles }
}

/**
 * The function converts hex color to rgba color
 * @param {string} hex The hex color
 * @return {Rgba} The rgba color obj
 */
export const rgbaFromHex = (hex: string): Rgba => {
  if (!hex.startsWith('#')) {
    throw new Error('The color must be the hex color')
  }
  return rgbaFromArgb(argbFromHex(hex))
}
