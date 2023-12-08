import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import ButtonGroup from './src/index'

export const FnButtonGroup: SFCWithInstall<typeof ButtonGroup> = withInstall(
  ButtonGroup,
  'FnButtonGroup'
)
FnButtonGroup.name = 'FnButtonGroup'
export default FnButtonGroup
export * from './src/button-group'
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
