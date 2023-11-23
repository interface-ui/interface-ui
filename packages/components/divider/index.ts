import { withInstall } from '../install'
import Divider from './src/index'

export const FnDivider = withInstall(Divider, 'FnDivider')
FnDivider.name = 'FnDivider'
export default FnDivider
export * from './src/divider'
export type DividerInstance = InstanceType<typeof Divider>
