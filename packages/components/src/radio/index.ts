import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Radio from './src/index.vue'

export const FnRadio: SFCWithInstall<typeof Radio> = withInstall(
  Radio,
  'FnRadio'
)
FnRadio.name = 'FnRadio'
export default FnRadio
export * from './src/radio'
export type RadioInstance = InstanceType<typeof Radio>
