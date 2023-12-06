import { withInstall } from '@fusion-ui-vue/utils'
import Divider from './src/index'

export const FnDivider = withInstall(Divider, 'FnDivider')
FnDivider.name = 'FnDivider'
export default FnDivider
export * from './src/divider'
export type DividerInstance = InstanceType<typeof Divider>
