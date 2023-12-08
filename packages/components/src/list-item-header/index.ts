import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import ListItemHeader from './src/index.vue'

export const FnListItemHeader: SFCWithInstall<typeof ListItemHeader> =
  withInstall(ListItemHeader, 'FnListItemHeader')
FnListItemHeader.name = 'FnListItemHeader'
export default FnListItemHeader
export * from './src/list-item-header'
export type ListItemHeaderInstance = InstanceType<typeof ListItemHeader>
