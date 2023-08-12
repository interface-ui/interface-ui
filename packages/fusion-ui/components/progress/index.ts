import { withInstall } from '../install'
import Progress from './src/index.vue'

export const FnProgress = withInstall(Progress, 'FnProgress')
FnProgress.name = 'FnProgress'
export default FnProgress
export * from './src/progress'
