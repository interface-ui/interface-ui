import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const modalProps = buildProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: true,
  },
  backdrop: {
    type: Boolean,
    default: true,
  },
  keepMounted: {
    type: Boolean,
    default: false,
  },
  cs: {
    type: [Object, String],
  },
})

export type ModalProps = ExtractPropTypes<typeof modalProps>
