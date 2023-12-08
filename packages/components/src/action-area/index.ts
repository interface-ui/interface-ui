import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import ActionArea from './src/index.vue'

export const FnActionArea: SFCWithInstall<typeof ActionArea> = withInstall(
  ActionArea,
  'FnActionArea'
)
FnActionArea.name = 'FnActionArea'
export default FnActionArea
export * from './src/action-area'
export type ActionAreaInstance = InstanceType<typeof ActionArea>
