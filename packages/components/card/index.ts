import { withInstall } from '../install'
import Card from './src/index.vue'

export const FnCard = withInstall(Card, 'FnCard')
FnCard.name = 'FnCard'
export default FnCard
export * from './src/card'
