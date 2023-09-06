import { withInstall } from '../install'
import BreadcrumbItem from './src/index.vue'

export const FnBreadcrumbItem = withInstall(BreadcrumbItem, 'FnBreadcrumbItem')
FnBreadcrumbItem.name = 'FnBreadcrumbItem'
export default FnBreadcrumbItem
export * from './src/breadcrumb-item'
