import { withInstall } from '../install'
import ListItemPlaceholder from './src/index.vue'

export const FnListItemPlaceholder = withInstall(
  ListItemPlaceholder,
  'FnListItemPlaceholder'
)
FnListItemPlaceholder.name = 'FnListItemPlaceholder'
export default FnListItemPlaceholder
export * from './src/list-item-placeholder'
export type ListItemPlaceholderInstance = InstanceType<
  typeof ListItemPlaceholder
>
