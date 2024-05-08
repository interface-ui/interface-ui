import type { Typography } from './types'

/**
 * @link https://m3.material.io/styles/typography/type-scale-tokens
 */
const typographyDefaultConfig = {
  fontFamily:
    'Roboto,"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  htmlFontSize: 16,
  fontSize: 14,
  pxToRem: (size: number): string => {
    const coef = typographyDefaultConfig.fontSize / 14
    return `${(size / typographyDefaultConfig.htmlFontSize) * coef}rem`
  },
}

const typography: Typography = {
  ...typographyDefaultConfig,
  h1: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: typographyDefaultConfig.pxToRem(57),
    fontStyle: 'unset',
    letterSpacing: typographyDefaultConfig.pxToRem(-0.25),
    lineHeight: typographyDefaultConfig.pxToRem(64),
    textTransform: 'unset',
  },
  h2: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: typographyDefaultConfig.pxToRem(45),
    fontStyle: 'unset',
    letterSpacing: typographyDefaultConfig.pxToRem(0),
    lineHeight: typographyDefaultConfig.pxToRem(52),
    textTransform: 'unset',
  },
  h3: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: typographyDefaultConfig.pxToRem(36),
    fontStyle: 'unset',
    letterSpacing: typographyDefaultConfig.pxToRem(0),
    lineHeight: typographyDefaultConfig.pxToRem(44),
    textTransform: 'unset',
  },
  h4: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: typographyDefaultConfig.pxToRem(32),
    fontStyle: 'unset',
    letterSpacing: typographyDefaultConfig.pxToRem(0),
    lineHeight: typographyDefaultConfig.pxToRem(40),
    textTransform: 'unset',
  },
  h5: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: typographyDefaultConfig.pxToRem(28),
    fontStyle: 'unset',
    letterSpacing: typographyDefaultConfig.pxToRem(0),
    lineHeight: typographyDefaultConfig.pxToRem(36),
    textTransform: 'unset',
  },
  h6: {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: typographyDefaultConfig.pxToRem(24),
    fontStyle: 'unset',
    letterSpacing: typographyDefaultConfig.pxToRem(0),
    lineHeight: typographyDefaultConfig.pxToRem(32),
    textTransform: 'unset',
  },
  title: {
    small: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: typographyDefaultConfig.pxToRem(14),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.1),
      lineHeight: typographyDefaultConfig.pxToRem(20),
      textTransform: 'unset',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: typographyDefaultConfig.pxToRem(16),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.15000001),
      lineHeight: typographyDefaultConfig.pxToRem(24),
      textTransform: 'unset',
    },
    large: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: typographyDefaultConfig.pxToRem(22),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0),
      lineHeight: typographyDefaultConfig.pxToRem(28),
      textTransform: 'unset',
    },
  },
  body: {
    small: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: typographyDefaultConfig.pxToRem(12),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.40000001),
      lineHeight: typographyDefaultConfig.pxToRem(16),
      textTransform: 'unset',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: typographyDefaultConfig.pxToRem(14),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.25),
      lineHeight: typographyDefaultConfig.pxToRem(20),
      textTransform: 'unset',
    },
    large: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: typographyDefaultConfig.pxToRem(16),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.5),
      lineHeight: typographyDefaultConfig.pxToRem(24),
      textTransform: 'unset',
    },
  },
  label: {
    small: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: typographyDefaultConfig.pxToRem(11),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.5),
      lineHeight: typographyDefaultConfig.pxToRem(16),
      textTransform: 'unset',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: typographyDefaultConfig.pxToRem(12),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.5),
      lineHeight: typographyDefaultConfig.pxToRem(16),
      textTransform: 'unset',
    },
    large: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: typographyDefaultConfig.pxToRem(14),
      fontStyle: 'unset',
      letterSpacing: typographyDefaultConfig.pxToRem(0.1),
      lineHeight: typographyDefaultConfig.pxToRem(20),
      textTransform: 'unset',
    },
  },
}

export default typography
