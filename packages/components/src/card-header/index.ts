import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import CardHeader from './src/index.vue'

export const InCardHeader: SFCWithInstall<typeof CardHeader> = withInstall(
  CardHeader,
  'InCardHeader'
)
InCardHeader.name = 'InCardHeader'
export default InCardHeader
export * from './src/card-header'
export type CardHeaderInstance = InstanceType<typeof CardHeader>
