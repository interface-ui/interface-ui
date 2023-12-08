import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Progress from './src/index.vue'

export const FnProgress: SFCWithInstall<typeof Progress> = withInstall(
  Progress,
  'FnProgress'
)
FnProgress.name = 'FnProgress'
export default FnProgress
export * from './src/progress'
export type ProgressInstance = InstanceType<typeof Progress>
