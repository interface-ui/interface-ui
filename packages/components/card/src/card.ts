import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const cardVariants = ['elevated', 'filled', 'outlined'] as const
export type CardVariants = typeof cardVariants[number]

export const cardProps = buildProps({
  variant: {
    type: String as PropType<CardVariants>,
    values: cardVariants,
    default: 'elevated',
  },
  cs: {
    type: [Object, String],
  },
})

export type CardProps = ExtractPropTypes<typeof cardProps>
