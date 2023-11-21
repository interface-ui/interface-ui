import { buildProps } from '@fusion-ui-vue/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const listProps = buildProps({
  cs: {
    type: [Object, String],
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'div',
  },
  level: {
    type: [Number, String],
    default: 0,
  },
  disablePadding: {
    type: Boolean,
    default: false,
  },
})

export type ListProps = ExtractPropTypes<typeof listProps>
