import type { ExtractPropTypes } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'

export interface OptionType {
  label: string
  value: string | number
  disabled?: boolean
}
export const switchProps = {
  modelValue: {
    type: [String, Number],
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
    type: [String, Number],
    default: '',
  },
  unCheckedIcon: {
    type: [String, Number],
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
const isString = (data: any): boolean => typeof data === 'string'

export const switchEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  change: (value: string) => true,
}

/** SwitchProps 组件 props 类型 */
export type SwitchProps = ExtractPropTypes<typeof switchProps>
