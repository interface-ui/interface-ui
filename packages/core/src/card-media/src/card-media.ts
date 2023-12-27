import { buildProps } from '@interface-ui/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const cardMediaShapes = ['rounded', 'square'] as const
export type CardMediaShapes = typeof cardMediaShapes[number]

export const cardMediaProps = buildProps({
  cs: {
    type: [Object, String],
  },
  shape: {
    type: String as PropType<CardMediaShapes>,
    values: cardMediaShapes,
    default: 'square',
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'img',
  },
  gutter: {
    type: Boolean,
    default: false,
  },
})

export type CardMediaProps = ExtractPropTypes<typeof cardMediaProps>
