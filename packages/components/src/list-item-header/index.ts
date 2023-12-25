import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import ListItemHeader from './src/index.vue'

export const InListItemHeader: SFCWithInstall<typeof ListItemHeader> =
  withInstall(ListItemHeader, 'InListItemHeader')
InListItemHeader.name = 'InListItemHeader'
export default InListItemHeader
export * from './src/list-item-header'
export type ListItemHeaderInstance = InstanceType<typeof ListItemHeader>
