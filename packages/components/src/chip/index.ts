import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Chip from './src/index.vue'

export const FnChip: SFCWithInstall<typeof Chip> = withInstall(Chip, 'FnChip')
FnChip.name = 'FnChip'
export default FnChip
export * from './src/chip'
export type ChipInstance = InstanceType<typeof Chip>
