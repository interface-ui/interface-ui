import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Progress from './src/index.vue'

export const InProgress: SFCWithInstall<typeof Progress> = withInstall(
  Progress,
  'InProgress'
)
InProgress.name = 'InProgress'
export default InProgress
export * from './src/progress'
export type ProgressInstance = InstanceType<typeof Progress>
