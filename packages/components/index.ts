import FnButton from './button'
import IconButton from './icon-button'
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
import FnAvatarGroup from './avatarGroup'
import FnTag from './tag'
import FnCheckbox from './checkbox'
import FnBreadcrumb from './breadcrumb'
import FnBreadcrumbItem from './breadcrumb-item'
import FnRipple from './ripple'
import FnDrawer from './drawer'
import FnFormLabel from './form-label'
import FnTypography from './typography'
export * from './avatarGroup'
export * from './button'
export * from './icon-button'
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

export const component = [
  FnButton,
  IconButton,
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
]

const CK = {
  install(App: any) {
    component.forEach((item) => {
      App.component(item.name, item)
    })
  },
}

export default CK
