import { withInstall } from '@fusion-ui-vue/utils'
import CardHeader from './src/index.vue'

export const FnCardHeader = withInstall(CardHeader, 'FnCardHeader')
FnCardHeader.name = 'FnCardHeader'
export default FnCardHeader
export * from './src/card-header'
export type CardHeaderInstance = InstanceType<typeof CardHeader>
