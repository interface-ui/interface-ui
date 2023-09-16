import type { ExtractPropTypes } from 'vue'
import {
  buildProps,
} from '@fusion-ui/utils/vue/props'
import { UPDATE_MODEL_EVENT, componentDirection } from '@fusion-ui/constants'
import { isBoolean } from '@fusion-ui/utils/types'

export const drawerProps = buildProps({
  modelValue: Boolean,
  direction: {
    type: String,
    values: componentDirection,
    default: 'left',
  },

} as const)

export type DrawerProps = ExtractPropTypes<typeof drawerProps>
export const drawerEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
}
export type DrawerEmits = typeof drawerEmits
