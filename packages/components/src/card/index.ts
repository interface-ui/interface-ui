import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Card from './src/index.vue'

export const InCard: SFCWithInstall<typeof Card> = withInstall(Card, 'InCard')
InCard.name = 'InCard'
export default InCard
export * from './src/card'
export type CardInstance = InstanceType<typeof Card>
