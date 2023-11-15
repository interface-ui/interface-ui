import { withInstall } from '../install'
import CardAction from './src/index.vue'

export const FnCardAction = withInstall(CardAction, 'FnCardAction')
FnCardAction.name = 'FnCardAction'
export default FnCardAction
export * from './src/card-action'
export type CardActionInstance = InstanceType<typeof CardAction>
