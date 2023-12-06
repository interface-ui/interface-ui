import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const inputBaseProps = buildProps({
  modelValue: {
    type: [String, Number, Boolean, Array, Object] as PropType<any>,
    required: true,
  },
  /**
   * TIPS
   * Required to let Vue handle the modelValue when type is 'checkbox' or 'radio'
   */
  type: {
    type: String,
    default: '',
  },
  cs: {
    type: [Object, String],
  },
  /**
   * TIPS
   * For internal development only
   * DO NOT PUT THIS PROP IN DOCUMENTATION
   */
  internal: {
    type: Boolean,
    default: false,
  },
})

export type InputBaseProps = ExtractPropTypes<typeof inputBaseProps>
