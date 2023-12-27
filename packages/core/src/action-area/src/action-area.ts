import { buildProps } from '@interface-ui/utils'
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
  cs: {
    type: [Object, String],
  },
})

export type ActionAreaProps = ExtractPropTypes<typeof actionAreaProps>
