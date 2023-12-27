import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import Fragment from './src/index'

export const InFragment: SFCWithInstall<typeof Fragment> = withInstall(
  Fragment,
  'InFragment'
)
InFragment.name = 'InFragment'
export default InFragment
export type fragmentInstance = InstanceType<typeof Fragment>
