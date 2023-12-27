import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import CardContent from './src/index.vue'

export const InCardContent: SFCWithInstall<typeof CardContent> = withInstall(
  CardContent,
  'InCardContent'
)
InCardContent.name = 'InCardContent'
export default InCardContent
export * from './src/card-content'
export type CardContentInstance = InstanceType<typeof CardContent>
