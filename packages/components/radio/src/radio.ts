import type { ExtractPropTypes } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'

export interface OptionType {
  label: string
  value: string | number
  disabled?: boolean
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
  color: {
    type: String,
    default: '',
  },
  horizontal: {
    type: Boolean,
    default: true,
  },
  optionList: {
    type: Array<OptionType>,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    required: false,
  },
}
const isString = (data: any): boolean => typeof data === 'string'

export const radioEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
  change: (value: string) => false,
}

/** RadioProps 组件 props 类型 */
export type RadioProps = ExtractPropTypes<typeof radioProps>
