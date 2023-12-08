import type { ExtractPropTypes } from 'vue'
import { buildProps } from '@fusion-ui-vue/utils'
import { isBoolean } from '@vueuse/core'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
export const drawerProps = buildProps({
  modelValue: Boolean,
  title: String,
  direction: {
    type: String,
    values: ['left', 'right', 'top', 'bottom'],
    default: 'left',
  },
} as const)

export type DrawerProps = ExtractPropTypes<typeof drawerProps>
export const drawerEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
}
export type DrawerEmits = typeof drawerEmits
