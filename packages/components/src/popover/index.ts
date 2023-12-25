import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Popover from './src/index.vue'

export const InPopover: SFCWithInstall<typeof Popover> = withInstall(
  Popover,
  'InPopover'
)
InPopover.name = 'InPopover'
export default InPopover
export * from './src/popover'
export type PopoverInstance = InstanceType<typeof Popover>
