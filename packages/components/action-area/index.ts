import { withInstall } from '../install'
import ActionArea from './src/index.vue'

export const FnActionArea = withInstall(ActionArea, 'FnActionArea')
FnActionArea.name = 'FnActionArea'
export default FnActionArea
export type ActionAreaInstance = InstanceType<typeof ActionArea>
