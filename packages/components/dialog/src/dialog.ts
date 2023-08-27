import type { InjectionKey, Ref } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'
import { isBoolean } from '../../../utils/types'

export const dialogProps = {
  dialogVisible: {
    type: Boolean,
    default: false,
  },
}
export const dialogkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true,
}
export type DialogEmits = typeof dialogEmits

export interface DialogContext {
  dialogRef: Ref<HTMLElement | undefined>

}

export const dialogInjectionKey: InjectionKey<DialogContext>
  = Symbol('dialogInjectionKey')
