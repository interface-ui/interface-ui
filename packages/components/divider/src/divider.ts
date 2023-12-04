import { buildProps } from '@fusion-ui-vue/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const dividerVariants = ['full-width', 'inset'] as const
export type DividerVariants = typeof dividerVariants[number]
export const dividerOrientations = ['horizontal', 'vertical'] as const
export type DividerOrientations = typeof dividerOrientations[number]
export const dividerTextAlignments = ['left', 'center', 'right'] as const
export type DividerTextAlignments = typeof dividerTextAlignments[number]

export const dividerProps = buildProps({
  variant: {
    type: String as PropType<DividerVariants>,
    values: dividerVariants,
    default: 'full-width',
  },
  orientation: {
    type: String as PropType<DividerOrientations>,
    values: dividerOrientations,
    default: 'horizontal',
  },
  textAlign: {
    type: String as PropType<DividerTextAlignments>,
    values: dividerTextAlignments,
    default: 'center',
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'hr',
  },
  noMargin: {
    type: Boolean,
    default: false,
  },
  cs: {
    type: [Object, String],
  },
})

export type DividerProps = ExtractPropTypes<typeof dividerProps>
