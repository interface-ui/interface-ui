import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import ButtonBase from './src/index.vue'

export const InButtonBase: SFCWithInstall<typeof ButtonBase> = withInstall(
  ButtonBase,
  'InButtonBase'
)
InButtonBase.name = 'InButtonBase'
export default InButtonBase
export * from './src/button-base'
export type ButtonBaseInstance = InstanceType<typeof ButtonBase>
