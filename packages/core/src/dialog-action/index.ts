import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import DialogAction from './src/index.vue'

export const InDialogAction: SFCWithInstall<typeof DialogAction> = withInstall(
  DialogAction,
  'InDialogAction'
)
InDialogAction.name = 'InDialogAction'
export default InDialogAction
export * from './src/dialog-action'
export type DialogActionInstance = InstanceType<typeof DialogAction>
