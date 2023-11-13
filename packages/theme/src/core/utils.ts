/* eslint-disable quote-props */
import { css, injectGlobal } from '@emotion/css'
import type {
  CustomColor,
  CustomColorGroup,
  Theme as DynamicTheme,
  Scheme,
} from '@material/material-color-utilities'
import {
  CorePalette,
  hexFromArgb,
  rgbaFromArgb,
} from '@material/material-color-utilities'
import type ThemeMode from '../mode'
import { themePalettesTones } from './types'
import type {
  AdditionalSchemes,
  ParsedSchemes,
  Schemes,
  ThemePalettes,
  ThemePalettesTones,
} from './types'
import type Theme from './theme'

export const parsePalettes = (
  palette: DynamicTheme['palettes']
): ThemePalettes => {
  const palettes = {} as ThemePalettes
  for (const [color, tones] of Object.entries(palette)) {
    const obj = {} as Record<ThemePalettesTones, string>
    themePalettesTones.forEach(
      toneKey =>
        (obj[toneKey as ThemePalettesTones] = hexFromArgb(tones.tone(+toneKey)))
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
        (obj[toneKey as ThemePalettesTones] = hexFromArgb(tones.tone(+toneKey)))
    )
    palettes[name.toLowerCase()] = obj
  })

  return palettes
}

export const parseShcemes = (scheme: Scheme): ParsedSchemes => {
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
  mode: ThemeMode
) => {
  const schemes: AdditionalSchemes = {} as any
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
      schemes[_key as keyof AdditionalSchemes] = color
      styles[`--md-sys-color-${token}`] = color
      styles[`--md-sys-color-${token}-rgb`] = `${r} ${g} ${b}`
    }
  })

  return { schemes, styles }
}

export const mergeParsedSchemes = (...args: ParsedSchemes[]): ParsedSchemes => {
  const schemes: Schemes = {} as any
  const styles: Record<string, string> = {} as any

  args.forEach(parsedScheme => {
    Object.assign(schemes, parsedScheme.schemes)
    Object.assign(styles, parsedScheme.styles)
  })

  return { schemes, styles }
}

export const injectJSS = (
  target: 'root' | 'host',
  lightSchemes: ParsedSchemes,
  darkSchemes: ParsedSchemes,
  theme: Theme
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
