import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Divider from './src/index'

export const InDivider: SFCWithInstall<typeof Divider> = withInstall(
  Divider,
  'InDivider'
)
InDivider.name = 'InDivider'
export default InDivider
export * from './src/divider'
export type DividerInstance = InstanceType<typeof Divider>
