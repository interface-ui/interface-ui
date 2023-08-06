// import type {  } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'

export type arr =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
interface MyObject {
  label: string
  value: string | number
  // 其他属性...
}
export const radioProps = {
  modelValue: {
    type: [String, Number],
    default: '',
  },
  value: {
    type: [String, Number],
    default: '',
  },
  optionList: {
    type: Array<MyObject>,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    required: false,
  },
}
const isString = (data: any): boolean => typeof data === 'string'

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => true,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
