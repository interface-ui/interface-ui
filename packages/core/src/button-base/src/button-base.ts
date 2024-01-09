import type { Component, ExtractPropTypes, PropType } from 'vue'

export const buttonBaseProps = {
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'button',
  },
  cs: {
    type: [Object, String],
  },
}

export type ButtonBaseProps = ExtractPropTypes<typeof buttonBaseProps>
