import { withInstall } from '@fusion-ui-vue/utils'
import Breadcrumb from './src/index'

export const FnBreadcrumb = withInstall(Breadcrumb, 'FnBreadcrumb')
FnBreadcrumb.name = 'FnBreadcrumb'
export default FnBreadcrumb
export * from './src/breadcrumb'
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>
