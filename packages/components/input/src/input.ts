import { buildProps } from '@fusion-ui-vue/utils'
import type { ExtractPropTypes } from 'vue'

export const inputProps = buildProps({
  modelValue: {
    type: String,
    required: true,
    default: '',
  },
})

export type InputProps = ExtractPropTypes<typeof inputProps>
