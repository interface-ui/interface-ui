import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Badge from './src/index.vue'

export const FnBadge: SFCWithInstall<typeof Badge> = withInstall(
  Badge,
  'FnBadge'
)
FnBadge.name = 'FnBadge'
export default FnBadge
export * from './src/badge'
export type BadgeInstance = InstanceType<typeof Badge>
