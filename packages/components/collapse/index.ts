import { withInstall } from '../install'
import Collapse from './src/index.vue'

export const FnCollapse = withInstall(Collapse, 'FnCollapse')
FnCollapse.name = 'FnCollapse'
export default FnCollapse
export type CollapseInstance = InstanceType<typeof Collapse>
