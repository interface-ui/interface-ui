import { withInstall } from '../install'
import ListItemText from './src/index.vue'

export const FnListItemText = withInstall(ListItemText, 'FnListItemText')
FnListItemText.name = 'FnListItemText'
export default FnListItemText
export * from './src/list-item-text'
export type ListItemTextInstance = InstanceType<typeof ListItemText>
