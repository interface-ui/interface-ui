import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import SwitchNew from './src/index.vue'

export const FnSwitchNew: SFCWithInstall<typeof SwitchNew> = withInstall(
  SwitchNew,
  'FnSwitchNew'
)
FnSwitchNew.name = 'FnSwitchNew'
export default FnSwitchNew
export * from './src/switch'
export type SwitchNewInstance = InstanceType<typeof SwitchNew>
