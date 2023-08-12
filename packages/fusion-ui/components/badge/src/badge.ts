import type { ExtractPropTypes, PropType } from 'vue'
export type InputType = String | Number

export const badgeProps = {
  value: {
    type: [String, Number] as PropType<InputType>,
    default: '',
  },
  max: {
    type: [String, Number],
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  dot: {
    type: Boolean,
    required: false,
  },
  flashing: {
    type: Boolean,
    required: false,
    default: false,
  },
}

/** BadgeProps 组件 props 类型 */
export type BadgeProps = ExtractPropTypes<typeof badgeProps>
