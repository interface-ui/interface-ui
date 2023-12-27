import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import DialogContent from './src/index.vue'

export const InDialogContent: SFCWithInstall<typeof DialogContent> =
  withInstall(DialogContent, 'InDialogContent')
InDialogContent.name = 'InDialogContent'
export default InDialogContent
export * from './src/dialog-content'
export type DialogContentInstance = InstanceType<typeof DialogContent>
