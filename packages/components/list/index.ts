import { withInstall } from '../install'
import List from './src/index.vue'

export const FnList = withInstall(List, 'FnList')
FnList.name = 'FnList'
export default FnList
export * from './src/list'
export type ListInstance = InstanceType<typeof List>
