import type { AcceptableColor } from '@fusion-ui-vue/theme'
import { buildProps } from '@fusion-ui-vue/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const listProps = buildProps({
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'div',
  },
  background: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'surface',
  },
  level: {
    type: [Number, String],
    default: 0,
  },
  sublist: {
    type: Boolean,
    default: false,
  },
  disablePadding: {
    type: Boolean,
    default: false,
  },
  cs: {
    type: [Object, String],
  },
})

export type ListProps = ExtractPropTypes<typeof listProps>
