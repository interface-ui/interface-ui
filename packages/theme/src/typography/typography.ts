/* eslint-disable @typescript-eslint/indent */
import type { ComponentSize } from '@fusion-ui/constants'

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

type TypographyWithSize = 'title' | 'body' | 'label'
type TypographyWithoutSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TypographyType = TypographyWithoutSize & TypographyWithSize

export type Typography = Record<TypographyWithoutSize, TypographyProp> &
  Record<TypographyWithSize, Record<ComponentSize, TypographyProp>>
