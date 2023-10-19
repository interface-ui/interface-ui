import { withInstall } from '../install'
import Switch from './src/index.vue'

export const FnSwitchNew = withInstall(Switch, 'FnCheckbox')
FnSwitchNew.name = 'FnSwitchNew'
export default FnSwitchNew
export * from './src/switch'
export type SwitchInstance = InstanceType<typeof Switch>
