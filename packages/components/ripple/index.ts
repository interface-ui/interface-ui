import { withInstall } from '../install'
import Ripple from './src/index.vue'

export const FnRipple = withInstall(Ripple, 'FnRipple')
FnRipple.name = 'FnRipple'
export default FnRipple
export * from './src/ripple'
export type RippleInstance = InstanceType<typeof Ripple>
