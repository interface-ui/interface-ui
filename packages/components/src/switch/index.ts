import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Switch from './src/index.vue'

export const InSwitch: SFCWithInstall<typeof Switch> = withInstall(
  Switch,
  'InSwitch'
)
InSwitch.name = 'InSwitch'
export default InSwitch
export * from './src/switch'
export type SwitchInstance = InstanceType<typeof Switch>
