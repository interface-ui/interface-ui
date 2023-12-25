import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Chip from './src/index.vue'

export const InChip: SFCWithInstall<typeof Chip> = withInstall(Chip, 'InChip')
InChip.name = 'InChip'
export default InChip
export * from './src/chip'
export type ChipInstance = InstanceType<typeof Chip>
