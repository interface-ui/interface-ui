import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import IconButton from './src/index.vue'

export const InIconButton: SFCWithInstall<typeof IconButton> = withInstall(
  IconButton,
  'InIconButton'
)
InIconButton.name = 'InIconButton'
export default InIconButton
export * from './src/icon-button'
export type IconButtonInstance = InstanceType<typeof IconButton>
