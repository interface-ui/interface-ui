import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Collapse from './src/index.vue'

export const InCollapse: SFCWithInstall<typeof Collapse> = withInstall(
  Collapse,
  'InCollapse'
)
InCollapse.name = 'InCollapse'
export default InCollapse
export type CollapseInstance = InstanceType<typeof Collapse>
