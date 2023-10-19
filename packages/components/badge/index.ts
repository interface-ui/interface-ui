import { withInstall } from '../install'
import Badge from './src/index.vue'

export const FnBadge = withInstall(Badge, 'FnBadge')
FnBadge.name = 'FnBadge'
export default FnBadge
export * from './src/badge'
export type BadgeInstance = InstanceType<typeof Badge>
