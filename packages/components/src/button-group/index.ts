import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import ButtonGroup from './src/index'

export const InButtonGroup: SFCWithInstall<typeof ButtonGroup> = withInstall(
  ButtonGroup,
  'InButtonGroup'
)
InButtonGroup.name = 'InButtonGroup'
export default InButtonGroup
export * from './src/button-group'
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
