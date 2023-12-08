import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Ripple from './src/index.vue'

export const FnRipple: SFCWithInstall<typeof Ripple> = withInstall(
  Ripple,
  'FnRipple'
)
FnRipple.name = 'FnRipple'
export default FnRipple
export * from './src/ripple'
export type RippleInstance = InstanceType<typeof Ripple>
