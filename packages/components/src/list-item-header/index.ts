import { withInstall } from '@fusion-ui-vue/utils'
import ListItemHeader from './src/index.vue'

export const FnListItemHeader = withInstall(ListItemHeader, 'FnListItemHeader')
FnListItemHeader.name = 'FnListItemHeader'
export default FnListItemHeader
export * from './src/list-item-header'
export type ListItemHeaderInstance = InstanceType<typeof ListItemHeader>
