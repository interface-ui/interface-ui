import type { Component, ExtractPropTypes, PropType } from 'vue'
import { buildProps } from '@fusion-ui-vue/utils'
import type { AcceptableColor } from '@fusion-ui-vue/theme'

export const chipVariants = ['filled', 'outlined'] as const
export type ChipVariants = typeof chipVariants[number]

export const chipProps = buildProps({
  variant: {
    type: String as PropType<ChipVariants>,
    values: chipVariants,
    default: 'filled',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'surfaceContainerLow',
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'span',
  },
  clickable: {
    type: Boolean,
    default: false,
  },
  deletable: {
    type: Boolean,
    default: false,
  },
  cs: {
    type: [Object, String],
  },
})

export type ChipProps = ExtractPropTypes<typeof chipProps>
