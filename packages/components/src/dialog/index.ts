import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Dialog from './src/index.vue'

export const FnDialog: SFCWithInstall<typeof Dialog> = withInstall(
  Dialog,
  'FnDialog'
)
FnDialog.name = 'FnDialog'
export default FnDialog
export * from './src/dialog'
export type DialogInstance = InstanceType<typeof Dialog>
