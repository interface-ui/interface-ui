import type { ExtractPropTypes, PropType } from 'vue'
export type BadgeType = String | Number

export const badgeProps = {
  value: {
    type: [String, Number] as PropType<BadgeType>,
    default: '',
  },
  max: {
    type: [String, Number] as PropType<BadgeType>,
    default: '',
  },
  color: {
    type: String,
    default: '#3894ff',
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
