import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Badge from './src/index.vue'

export const InBadge: SFCWithInstall<typeof Badge> = withInstall(
  Badge,
  'InBadge'
)
InBadge.name = 'InBadge'
export default InBadge
export * from './src/badge'
export type BadgeInstance = InstanceType<typeof Badge>
