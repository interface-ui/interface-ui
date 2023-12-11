import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import DialogHeader from './src/index.vue'

export const FnDialogHeader: SFCWithInstall<typeof DialogHeader> = withInstall(
  DialogHeader,
  'FnDialogHeader'
)
FnDialogHeader.name = 'FnDialogHeader'
export default FnDialogHeader
export * from './src/dialog-header'
export type DialogHeaderInstance = InstanceType<typeof DialogHeader>
