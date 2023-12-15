import { buildProps } from '@fusion-ui-vue/utils'
import type {
  AcceptableColor,
  TypographyWithoutSize,
} from '@fusion-ui-vue/theme'
import { typographyWithSize, typographyWithoutSize } from '@fusion-ui-vue/theme'
import type { Component, ExtractPropTypes, PropType } from 'vue'
import { componentSizes } from '@fusion-ui-vue/constants'

const $typographyWithSize = typographyWithSize
  .map(item => componentSizes.map(size => `${item}.${size}`))
  .flat()
const typographyVariant = [...typographyWithoutSize, ...$typographyWithSize]
export type TypographyVariant =
  | TypographyWithoutSize
  | 'title.small'
  | 'title.medium'
  | 'title.large'
  | 'body.small'
  | 'body.medium'
  | 'body.large'
  | 'label.small'
  | 'label.medium'
  | 'label.large'

export const typographyProps = buildProps({
  variant: {
    type: String as PropType<TypographyVariant>,
    values: typographyVariant,
    default: 'body.large',
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
  },
  noWarp: {
    type: Boolean,
    default: false,
  },
  gutter: {
    type: Boolean,
    default: false,
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'onSurface',
  },
  cs: {
    type: [Object, String],
  },
})

export type TypographyProps = ExtractPropTypes<typeof typographyProps>
