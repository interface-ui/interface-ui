import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import List from './src/index'

export const InList: SFCWithInstall<typeof List> = withInstall(List, 'InList')
InList.name = 'InList'
export default InList
export * from './src/list'
export type ListInstance = InstanceType<typeof List>
