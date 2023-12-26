import type { SFCWithInstall } from '@interface-ui/utils'
import { withInstall } from '@interface-ui/utils'
import SvgIcon from './src/index'

export const InSvgIcon: SFCWithInstall<typeof SvgIcon> = withInstall(
  SvgIcon,
  'InSvgIcon'
)
InSvgIcon.name = 'InSvgIcon'
export default InSvgIcon
export * from './src/svg-icon'
export type SvgIconInstance = InstanceType<typeof SvgIcon>
