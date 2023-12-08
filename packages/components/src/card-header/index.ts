import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import CardHeader from './src/index.vue'

export const FnCardHeader: SFCWithInstall<typeof CardHeader> = withInstall(
  CardHeader,
  'FnCardHeader'
)
FnCardHeader.name = 'FnCardHeader'
export default FnCardHeader
export * from './src/card-header'
export type CardHeaderInstance = InstanceType<typeof CardHeader>
