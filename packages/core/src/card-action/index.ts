import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import CardAction from './src/index.vue'

export const InCardAction: SFCWithInstall<typeof CardAction> = withInstall(
  CardAction,
  'InCardAction'
)
InCardAction.name = 'InCardAction'
export default InCardAction
export * from './src/card-action'
export type CardActionInstance = InstanceType<typeof CardAction>
