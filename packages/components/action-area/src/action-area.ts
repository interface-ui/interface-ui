import { buildProps } from '@fusion-ui-vue/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const actionAreaProps = buildProps({
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'div',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

export type ActionAreaProps = ExtractPropTypes<typeof actionAreaProps>
