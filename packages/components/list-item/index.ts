import { withInstall } from '../install'
import ListItem from './src/index.vue'

export const FnListItem = withInstall(ListItem, 'FnListItem')
FnListItem.name = 'FnListItem'
export default FnListItem
export * from './src/list-item'
export type ListItemInstance = InstanceType<typeof ListItem>
