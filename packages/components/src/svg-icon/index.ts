import type { SFCWithInstall } from '@fusion-ui-vue/utils'
import { withInstall } from '@fusion-ui-vue/utils'
import SvgIcon from './src/index'

export const FnSvgIcon: SFCWithInstall<typeof SvgIcon> = withInstall(
  SvgIcon,
  'FnSvgIcon'
)
FnSvgIcon.name = 'FnSvgIcon'
export default FnSvgIcon
export * from './src/svg-icon'
export type SvgIconInstance = InstanceType<typeof SvgIcon>
