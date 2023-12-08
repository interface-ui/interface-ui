import { withInstall } from '@fusion-ui-vue/utils'
import Card from './src/index.vue'

export const FnCard = withInstall(Card, 'FnCard')
FnCard.name = 'FnCard'
export default FnCard
export * from './src/card'
export type CardInstance = InstanceType<typeof Card>