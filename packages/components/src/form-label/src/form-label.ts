import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentDirections } from '@fusion-ui-vue/constants'
import { componentDirections } from '@fusion-ui-vue/constants'

export const formLabelProps = {
  label: {
    type: String,
    required: true,
  },
  control: {
    required: true,
  },
  labelPlacement: {
    type: String as PropType<ComponentDirections>,
    values: componentDirections,
    default: 'right',
  },
}

export type FormLabelProps = ExtractPropTypes<typeof formLabelProps>
