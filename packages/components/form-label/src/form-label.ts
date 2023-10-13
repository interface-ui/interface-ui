import type { ExtractPropTypes } from 'vue'
import { componentDirection } from '@fusion-ui-vue/constants'

export const formLabelProps = {
  label: {
    type: String,
    required: true,
  },
  control: {
    required: true,
  },
  labelPlacement: {
    type: String,
    values: componentDirection,
    default: 'right',
  },
}

export type FormLabelProps = ExtractPropTypes<typeof formLabelProps>
