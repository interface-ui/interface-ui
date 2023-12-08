import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Breadcrumb from './src/index'

export const FnBreadcrumb: SFCWithInstall<typeof Breadcrumb> = withInstall(
  Breadcrumb,
  'FnBreadcrumb'
)
FnBreadcrumb.name = 'FnBreadcrumb'
export default FnBreadcrumb
export * from './src/breadcrumb'
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>
