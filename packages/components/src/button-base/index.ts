import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import ButtonBase from './src/index.vue'

export const FnButtonBase: SFCWithInstall<typeof ButtonBase> = withInstall(
  ButtonBase,
  'FnButtonBase'
)
FnButtonBase.name = 'FnButtonBase'
export default FnButtonBase
export * from './src/button-base'
export type ButtonBaseInstance = InstanceType<typeof ButtonBase>
