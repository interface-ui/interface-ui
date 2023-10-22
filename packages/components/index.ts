import FnButton from './button'
import FnIconButton from './icon-button'
import FnButtonGroup from './button-group'
import FnAlert from './alert'
import FnIcon from './icon'
import FnLink from './link'
import FnMessage from './message'
import FnDialog from './dialog'
import FnInput from './input'
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
export * from './avatar-group'
export * from './button'
export * from './icon-button'
export * from './button-group'
export * from './alert'
export * from './icon'
export * from './link'
export * from './message'
export * from './dialog'
export * from './input'
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

export const components = [
  FnButton,
  FnIconButton,
  FnButtonGroup,
  FnAlert,
  FnIcon,
  FnLink,
  FnMessage,
  FnDialog,
  FnInput,
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
]

const CK = {
  install(App: any) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  },
}

export default CK
