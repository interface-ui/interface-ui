import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Breadcrumb from './src/index'

export const InBreadcrumb: SFCWithInstall<typeof Breadcrumb> = withInstall(
  Breadcrumb,
  'InBreadcrumb'
)
InBreadcrumb.name = 'InBreadcrumb'
export default InBreadcrumb
export * from './src/breadcrumb'
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>
