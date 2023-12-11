import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import DialogContent from './src/index.vue'

export const FnDialogContent: SFCWithInstall<typeof DialogContent> =
  withInstall(DialogContent, 'FnDialogContent')
FnDialogContent.name = 'FnDialogContent'
export default FnDialogContent
export * from './src/dialog-content'
export type DialogContentInstance = InstanceType<typeof DialogContent>
