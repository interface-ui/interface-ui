import { withInstall } from '../install'
import Popover from './src/index.vue'

export const FnPopover = withInstall(Popover, 'FnPopover')
FnPopover.name = 'FnPopover'
export default FnPopover
export * from './src/popover'
export type PopoverInstance = InstanceType<typeof Popover>
