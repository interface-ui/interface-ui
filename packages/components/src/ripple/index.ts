import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Ripple from './src/index.vue'

export const InRipple: SFCWithInstall<typeof Ripple> = withInstall(
  Ripple,
  'InRipple'
)
InRipple.name = 'InRipple'
export default InRipple
export * from './src/ripple'
export type RippleInstance = InstanceType<typeof Ripple>
