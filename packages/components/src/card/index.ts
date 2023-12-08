import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Card from './src/index.vue'

export const FnCard: SFCWithInstall<typeof Card> = withInstall(Card, 'FnCard')
FnCard.name = 'FnCard'
export default FnCard
export * from './src/card'
export type CardInstance = InstanceType<typeof Card>
