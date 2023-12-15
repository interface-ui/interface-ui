import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import Fragment from './src/index'

export const FnFragment: SFCWithInstall<typeof Fragment> = withInstall(
  Fragment,
  'FnFragment'
)
FnFragment.name = 'FnFragment'
export default FnFragment
export type fragmentInstance = InstanceType<typeof Fragment>
