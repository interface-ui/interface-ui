import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import DialogAction from './src/index.vue'

export const FnDialogAction: SFCWithInstall<typeof DialogAction> = withInstall(
  DialogAction,
  'FnDialogAction'
)
FnDialogAction.name = 'FnDialogAction'
export default FnDialogAction
export * from './src/dialog-action'
export type DialogActionInstance = InstanceType<typeof DialogAction>
