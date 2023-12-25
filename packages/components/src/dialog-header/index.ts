import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import DialogHeader from './src/index.vue'

export const InDialogHeader: SFCWithInstall<typeof DialogHeader> = withInstall(
  DialogHeader,
  'InDialogHeader'
)
InDialogHeader.name = 'InDialogHeader'
export default InDialogHeader
export * from './src/dialog-header'
export type DialogHeaderInstance = InstanceType<typeof DialogHeader>
