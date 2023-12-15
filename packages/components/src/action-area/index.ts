import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import ActionArea from './src/index.vue'

export const InActionArea: SFCWithInstall<typeof ActionArea> = withInstall(
  ActionArea,
  'InActionArea'
)
InActionArea.name = 'InActionArea'
export default InActionArea
export * from './src/action-area'
export type ActionAreaInstance = InstanceType<typeof ActionArea>
