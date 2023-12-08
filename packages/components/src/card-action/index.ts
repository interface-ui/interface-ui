import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import CardAction from './src/index.vue'

export const FnCardAction: SFCWithInstall<typeof CardAction> = withInstall(
  CardAction,
  'FnCardAction'
)
FnCardAction.name = 'FnCardAction'
export default FnCardAction
export * from './src/card-action'
export type CardActionInstance = InstanceType<typeof CardAction>
