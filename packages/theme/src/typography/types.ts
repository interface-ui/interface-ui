/* eslint-disable @typescript-eslint/indent */
import type { ComponentSize } from '@fusion-ui-vue/constants'

export interface TypographyProp {
  fontFamily: string
  fontWeight: number
  fontSize: string
  fontStyle: string
  letterSpacing: string
  lineHeight: string
  textTransform: string
  textDecoration: string
}

export const typographyWithSize = ['title', 'body', 'label'] as const
export type TypographyWithSize = typeof typographyWithSize[number]
export const typographyWithoutSize = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
] as const
export type TypographyWithoutSize = typeof typographyWithoutSize[number]

export type TypographyType = TypographyWithoutSize | TypographyWithSize

interface TypographyDefaultConfig {
  fontFamily: string
  htmlFontSize: number
  fontSize: number
  pxToRem: (size: number) => string
}
export type Typography = TypographyDefaultConfig &
  Record<TypographyWithoutSize, TypographyProp> &
  Record<TypographyWithSize, Record<ComponentSize, TypographyProp>>

export type TypographyMap = Record<TypographyType, string>
export const typographyMapping: TypographyMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  title: 'h6',
  body: 'p',
  label: 'span',
}
