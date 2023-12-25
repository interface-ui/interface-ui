import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import InputBase from './src/index.vue'

export const InInputBase: SFCWithInstall<typeof InputBase> = withInstall(
  InputBase,
  'InInputBase'
)
InInputBase.name = 'InInputBase'
export default InInputBase
export * from './src/input-base'
export type InputBaseInstance = InstanceType<typeof InputBase>
