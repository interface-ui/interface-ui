import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Dialog from './src/index.vue'

export const InDialog: SFCWithInstall<typeof Dialog> = withInstall(
  Dialog,
  'InDialog'
)
InDialog.name = 'InDialog'
export default InDialog
export * from './src/dialog'
export type DialogInstance = InstanceType<typeof Dialog>
