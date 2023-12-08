import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import ListItem from './src/index.vue'

export const FnListItem: SFCWithInstall<typeof ListItem> = withInstall(
  ListItem,
  'FnListItem'
)
FnListItem.name = 'FnListItem'
export default FnListItem
export * from './src/list-item'
export type ListItemInstance = InstanceType<typeof ListItem>
