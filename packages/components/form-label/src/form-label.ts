import type { ExtractPropTypes } from 'vue'
import { componentDirection } from '@fusion-ui/constants'

export const formLabelProps = {
  label: {
    type: String,
    required: true,
  },
  labelPlacement: {
    type: String,
    values: componentDirection,
    default: 'right',
  },
  required: {
    type: Boolean,
    default: false,
  },
}

export type FormLabelProps = ExtractPropTypes<typeof formLabelProps>
