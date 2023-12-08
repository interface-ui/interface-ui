import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Collapse from './src/index.vue'

export const FnCollapse: SFCWithInstall<typeof Collapse> = withInstall(
  Collapse,
  'FnCollapse'
)
FnCollapse.name = 'FnCollapse'
export default FnCollapse
export type CollapseInstance = InstanceType<typeof Collapse>
