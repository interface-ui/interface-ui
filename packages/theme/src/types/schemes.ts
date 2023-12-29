import {
  CorePalette,
  type Scheme,
  argbFromHex,
  hexFromArgb,
} from '@material/material-color-utilities'
import { isString, toCapitalize, toKebabCase } from '@interface-ui/utils'
import type { GenerateCustomSchemes } from './custom-schemes'
import type { Theme } from '@/core'

export type Schemes = Omit<Record<keyof Scheme, string>, 'toJSON'>

export type SeveritySchemes = GenerateCustomSchemes<
  'success' | 'info' | 'warning' | 'error'
>

export type ThemeSchemes = Schemes & SeveritySchemes

export class ComponentSchemes {
  static light(color: string, theme: Theme): ComponentSchemes {
    const isHex: boolean = color.startsWith('#')

    if (isHex) {
      const core: CorePalette = CorePalette.of(argbFromHex(color))

      return new ComponentSchemes({
        source: color,
        primary: core.a1.tone(40),
        onPrimary: core.a1.tone(100),
        primaryContainer: core.a1.tone(90),
        onPrimaryContainer: core.a1.tone(10),
        secondary: core.a2.tone(40),
        onSecondary: core.a2.tone(100),
        secondaryContainer: core.a2.tone(90),
        onSecondaryContainer: core.a2.tone(10),
        tertiary: core.a3.tone(40),
        onTertiary: core.a3.tone(100),
        tertiaryContainer: core.a3.tone(90),
        onTertiaryContainer: core.a3.tone(10),
        surfaceDim: core.n1.tone(87),
        surface: core.n1.tone(98),
        surfaceBright: core.n1.tone(98),
        surfaceContainerLowest: core.n1.tone(100),
        surfaceContainerLow: core.n1.tone(96),
        surfaceContainer: core.n1.tone(94),
        surfaceContainerHigh: core.n1.tone(92),
        surfaceContainerHighest: core.n1.tone(90),
        onSurface: core.n1.tone(10),
        onSurfaceVariant: core.n2.tone(30),
        outline: core.n2.tone(50),
        outlineVariant: core.n2.tone(80),
      })
    }

    return ComponentSchemes.schemesFromTheme(color, theme)
  }

  static dark(color: string, theme: Theme): ComponentSchemes {
    const isHex: boolean = color.startsWith('#')

    if (isHex) {
      const core: CorePalette = CorePalette.of(argbFromHex(color))

      return new ComponentSchemes({
        source: color,
        primary: core.a1.tone(80),
        onPrimary: core.a1.tone(20),
        primaryContainer: core.a1.tone(30),
        onPrimaryContainer: core.a1.tone(90),
        secondary: core.a2.tone(80),
        onSecondary: core.a2.tone(20),
        secondaryContainer: core.a2.tone(30),
        onSecondaryContainer: core.a2.tone(90),
        tertiary: core.a3.tone(80),
        onTertiary: core.a3.tone(20),
        tertiaryContainer: core.a3.tone(30),
        onTertiaryContainer: core.a3.tone(90),
        surfaceDim: core.n1.tone(6),
        surface: core.n1.tone(6),
        surfaceBright: core.n1.tone(24),
        surfaceContainerLowest: core.n1.tone(4),
        surfaceContainerLow: core.n1.tone(10),
        surfaceContainer: core.n1.tone(12),
        surfaceContainerHigh: core.n1.tone(17),
        surfaceContainerHighest: core.n1.tone(22),
        onSurface: core.n1.tone(90),
        onSurfaceVariant: core.n2.tone(80),
        outline: core.n2.tone(60),
        outlineVariant: core.n2.tone(30),
      })
    }

    return ComponentSchemes.schemesFromTheme(color, theme)
  }

  private static schemesFromTheme(
    color: string,
    theme: Theme,
  ): ComponentSchemes {
    const primarySet = ComponentSchemes.colorSet(color, theme, 'primary')
    const secondarySet = ComponentSchemes.colorSet(
      'secondary',
      theme,
      'secondary',
    )
    const tertiarySet = ComponentSchemes.colorSet('tertiary', theme, 'tertiary')

    return new ComponentSchemes({
      source: color,
      ...primarySet,
      ...secondarySet,
      ...tertiarySet,
      surfaceDim: 'var(--md-sys-color-surface-dim)',
      surface: 'var(--md-sys-color-surface)',
      surfaceBright: 'var(--md-sys-color-surface-bright)',
      surfaceContainerLowest: 'var(--md-sys-color-surface-container-lowest)',
      surfaceContainerLow: 'var(--md-sys-color-surface-container-low)',
      surfaceContainer: 'var(--md-sys-color-surface-container)',
      surfaceContainerHigh: 'var(--md-sys-color-surface-container-high)',
      surfaceContainerHighest: 'var(--md-sys-color-surface-container-highest)',
      onSurface: 'var(--md-sys-color-on-surface)',
      onSurfaceVariant: 'var(--md-sys-color-on-surface-variant)',
      outline: 'var(--md-sys-color-outline)',
      outlineVariant: 'var(--md-sys-color-outline-variant)',
    })
  }

  private static colorSet<T extends string>(
    source: string,
    theme: Theme,
    key: T,
  ): GenerateCustomSchemes<T> {
    const color =
      source in theme.schemes
        ? `var(--md-sys-color-${toKebabCase(source)})`
        : source

    const onColor =
      `on${toCapitalize(source)}` in theme.schemes
        ? `var(--md-sys-color-on-${toKebabCase(source)})`
        : `var(--md-sys-color-on-${toKebabCase(key)})`

    const colorContainer =
      `${key}Container` in theme.schemes
        ? `var(--md-sys-color-${toKebabCase(source)}-container)`
        : `var(--md-sys-color-${toKebabCase(key)}-container)`

    const onColorContainer =
      `on${toCapitalize(key)}Container` in theme.schemes
        ? `var(--md-sys-color-on-${toKebabCase(source)}-container)`
        : `var(--md-sys-color-on-${toKebabCase(key)}-container)`

    return {
      [key]: color,
      [`on${toCapitalize(key)}`]: onColor,
      [`${key}Container`]: colorContainer,
      [`on${toCapitalize(key)}Container`]: onColorContainer,
    } as GenerateCustomSchemes<T>
  }

  private constructor(
    private readonly props: {
      source: string
      primary: number | string
      onPrimary: number | string
      primaryContainer: number | string
      onPrimaryContainer: number | string
      secondary: number | string
      onSecondary: number | string
      secondaryContainer: number | string
      onSecondaryContainer: number | string
      tertiary: number | string
      onTertiary: number | string
      tertiaryContainer: number | string
      onTertiaryContainer: number | string
      surfaceDim: number | string
      surface: number | string
      surfaceBright: number | string
      surfaceContainerLowest: number | string
      surfaceContainerLow: number | string
      surfaceContainer: number | string
      surfaceContainerHigh: number | string
      surfaceContainerHighest: number | string
      onSurface: number | string
      onSurfaceVariant: number | string
      outline: number | string
      outlineVariant: number | string
    },
  ) {}

  get primary(): string {
    return isString(this.props.primary)
      ? this.props.primary
      : hexFromArgb(this.props.primary)
  }

  get onPrimary(): string {
    return isString(this.props.onPrimary)
      ? this.props.onPrimary
      : hexFromArgb(this.props.onPrimary)
  }

  get primaryContainer(): string {
    return isString(this.props.primaryContainer)
      ? this.props.primaryContainer
      : hexFromArgb(this.props.primaryContainer)
  }

  get onPrimaryContainer(): string {
    return isString(this.props.onPrimaryContainer)
      ? this.props.onPrimaryContainer
      : hexFromArgb(this.props.onPrimaryContainer)
  }

  get secondary(): string {
    return isString(this.props.secondary)
      ? this.props.secondary
      : hexFromArgb(this.props.secondary)
  }

  get onSecondary(): string {
    return isString(this.props.onSecondary)
      ? this.props.onSecondary
      : hexFromArgb(this.props.onSecondary)
  }

  get secondaryContainer(): string {
    return isString(this.props.secondaryContainer)
      ? this.props.secondaryContainer
      : hexFromArgb(this.props.secondaryContainer)
  }

  get onSecondaryContainer(): string {
    return isString(this.props.onSecondaryContainer)
      ? this.props.onSecondaryContainer
      : hexFromArgb(this.props.onSecondaryContainer)
  }

  get tertiary(): string {
    return isString(this.props.tertiary)
      ? this.props.tertiary
      : hexFromArgb(this.props.tertiary)
  }

  get onTertiary(): string {
    return isString(this.props.onTertiary)
      ? this.props.onTertiary
      : hexFromArgb(this.props.onTertiary)
  }

  get tertiaryContainer(): string {
    return isString(this.props.tertiaryContainer)
      ? this.props.tertiaryContainer
      : hexFromArgb(this.props.tertiaryContainer)
  }

  get onTertiaryContainer(): string {
    return isString(this.props.onTertiaryContainer)
      ? this.props.onTertiaryContainer
      : hexFromArgb(this.props.onTertiaryContainer)
  }

  get surfaceDim(): string {
    return isString(this.props.surfaceDim)
      ? this.props.surfaceDim
      : hexFromArgb(this.props.surfaceDim)
  }

  get surface(): string {
    return isString(this.props.surface)
      ? this.props.surface
      : hexFromArgb(this.props.surface)
  }

  get surfaceBright(): string {
    return isString(this.props.surfaceBright)
      ? this.props.surfaceBright
      : hexFromArgb(this.props.surfaceBright)
  }

  get surfaceContainerLowest(): string {
    return isString(this.props.surfaceContainerLowest)
      ? this.props.surfaceContainerLowest
      : hexFromArgb(this.props.surfaceContainerLowest)
  }

  get surfaceContainerLow(): string {
    return isString(this.props.surfaceContainerLow)
      ? this.props.surfaceContainerLow
      : hexFromArgb(this.props.surfaceContainerLow)
  }

  get surfaceContainer(): string {
    return isString(this.props.surfaceContainer)
      ? this.props.surfaceContainer
      : hexFromArgb(this.props.surfaceContainer)
  }

  get surfaceContainerHigh(): string {
    return isString(this.props.surfaceContainerHigh)
      ? this.props.surfaceContainerHigh
      : hexFromArgb(this.props.surfaceContainerHigh)
  }

  get surfaceContainerHighest(): string {
    return isString(this.props.surfaceContainerHighest)
      ? this.props.surfaceContainerHighest
      : hexFromArgb(this.props.surfaceContainerHighest)
  }

  get onSurface(): string {
    return isString(this.props.onSurface)
      ? this.props.onSurface
      : hexFromArgb(this.props.onSurface)
  }

  get onSurfaceVariant(): string {
    return isString(this.props.onSurfaceVariant)
      ? this.props.onSurfaceVariant
      : hexFromArgb(this.props.onSurfaceVariant)
  }

  get outline(): string {
    return isString(this.props.outline)
      ? this.props.outline
      : hexFromArgb(this.props.outline)
  }

  get outlineVariant(): string {
    return isString(this.props.outlineVariant)
      ? this.props.outlineVariant
      : hexFromArgb(this.props.outlineVariant)
  }
}
