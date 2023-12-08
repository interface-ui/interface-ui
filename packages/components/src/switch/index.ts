import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Switch from './src/index.vue'

export const FnSwitch: SFCWithInstall<typeof Switch> = withInstall(
  Switch,
  'FnSwitch'
)
FnSwitch.name = 'FnSwitch'
export default FnSwitch
export * from './src/switch'
export type SwitchInstance = InstanceType<typeof Switch>
