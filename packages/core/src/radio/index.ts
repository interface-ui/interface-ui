import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Radio from './src/index.vue'

export const InRadio: SFCWithInstall<typeof Radio> = withInstall(
  Radio,
  'InRadio'
)
InRadio.name = 'InRadio'
export default InRadio
export * from './src/radio'
export type RadioInstance = InstanceType<typeof Radio>
