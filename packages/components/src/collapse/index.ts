import { withInstall } from '@fusion-ui-vue/utils'
import Collapse from './src/index.vue'

export const FnCollapse = withInstall(Collapse, 'FnCollapse')
FnCollapse.name = 'FnCollapse'
export default FnCollapse
export type CollapseInstance = InstanceType<typeof Collapse>
