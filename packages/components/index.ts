import FnButtonBase from './button-base'
import FnButton from './button'
import FnIconButton from './icon-button'
import FnButtonGroup from './button-group'
import FnAlert from './alert'
import FnLink from './link'
import FnMessage from './message'
import FnDialog from './dialog'
import FnInputBase from './input-base'
import FnRadio from './radio'
import FnCard from './card'
import FnSwitch from './switch'
import FnBadge from './badge'
import FnProgress from './progress'
import FnAvatar from './avatar'
import FnAvatarGroup from './avatar-group'
import FnTag from './tag'
import FnCheckbox from './checkbox'
import FnBreadcrumb from './breadcrumb'
import FnBreadcrumbItem from './breadcrumb-item'
import FnRipple from './ripple'
import FnDrawer from './drawer'
import FnFormLabel from './form-label'
import FnTypography from './typography'
import FnSwitchNew from './switch-new'
import FnTextField from './text-field'
import FnSvgIcon from './svg-icon'
export * from './button-base'
export * from './avatar-group'
export * from './button'
export * from './icon-button'
export * from './button-group'
export * from './alert'
export * from './link'
export * from './message'
export * from './dialog'
export * from './input-base'
export * from './radio'
export * from './switch'
export * from './badge'
export * from './progress'
export * from './card'
export * from './tag'
export * from './avatar'
export * from './checkbox'
export * from './breadcrumb'
export * from './breadcrumb-item'
export * from './drawer'
export * from './form-label'
export * from './typography'
export * from './ripple'
export * from './switch-new'
export * from './text-field'
export * from './svg-icon'

export const components = [
  FnButtonBase,
  FnButton,
  FnIconButton,
  FnButtonGroup,
  FnAlert,
  FnLink,
  FnMessage,
  FnDialog,
  FnInputBase,
  FnRadio,
  FnSwitch,
  FnBadge,
  FnProgress,
  FnCard,
  FnTag,
  FnAvatar,
  FnAvatarGroup,
  FnCheckbox,
  FnBreadcrumb,
  FnBreadcrumbItem,
  FnRipple,
  FnDrawer,
  FnFormLabel,
  FnTypography,
  FnSwitchNew,
  FnTextField,
  FnSvgIcon,
]

const CK = {
  install(App: any) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  },
}

export default CK
