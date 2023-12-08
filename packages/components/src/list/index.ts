import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import List from './src/index'

export const FnList: SFCWithInstall<typeof List> = withInstall(List, 'FnList')
FnList.name = 'FnList'
export default FnList
export * from './src/list'
export type ListInstance = InstanceType<typeof List>
