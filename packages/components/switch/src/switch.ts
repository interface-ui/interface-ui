import type { ExtractPropTypes } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constants/event'

export interface OptionType {
  label: string
  value: string | number
  disabled?: boolean
}
export const switchProps = {
  modelValue: {
    type: Boolean,
    default: '',
  },
  width: {
    type: [String, Number],
    default: '50px',
  },
  color: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  checkedText: {
    type: [String, Number],
    default: '',
  },
  unCheckedText: {
    type: [String, Number],
    default: '',
  },
  checkedIcon: {
    type: [String],
    default: '',
  },
  unCheckedIcon: {
    type: [String],
    default: '',
  },
  checkedIconColor: {
    type: String,
    default: '',
  },
  unCheckedIconColor: {
    type: String,
    default: '',
  },
}
const isBoolean = (data: any): boolean => typeof data === 'boolean'

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isBoolean(value),
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  change: (value: string) => true,
}

/** SwitchProps 组件 props 类型 */
export type SwitchProps = ExtractPropTypes<typeof switchProps>
