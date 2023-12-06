import { withInstall } from '@fusion-ui-vue/utils'
import SvgIcon from './src/index'

export const FnSvgIcon = withInstall(SvgIcon, 'FnSvgIcon')
FnSvgIcon.name = 'FnSvgIcon'
export default FnSvgIcon
export * from './src/svg-icon'
export type SvgIconInstance = InstanceType<typeof SvgIcon>
