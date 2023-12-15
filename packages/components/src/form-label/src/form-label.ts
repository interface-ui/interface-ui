import type { ExtractPropTypes, PropType } from 'vue'
import type { ComponentDirections } from '@interface-ui/constants'
import { componentDirections } from '@interface-ui/constants'

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
