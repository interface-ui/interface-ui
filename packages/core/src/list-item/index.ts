import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import ListItem from './src/index.vue'

export const InListItem: SFCWithInstall<typeof ListItem> = withInstall(
  ListItem,
  'InListItem'
)
InListItem.name = 'InListItem'
export default InListItem
export * from './src/list-item'
export type ListItemInstance = InstanceType<typeof ListItem>
