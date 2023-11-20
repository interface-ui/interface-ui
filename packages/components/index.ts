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
import FnCardContent from './card-content'
import FnCardHeader from './card-header'
import FnCardAction from './card-action'
import FnCardMedia from './card-media'
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
import FnFba from './fba'
import FnActionArea from './action-area'
import FnModal from './modal'
import FnPopover from './popover'
import FnDivider from './divider'
import FnList from './list'
import FnListItem from './list-item'
import FnListItemPlaceholder from './list-item-placeholder'
import FnCollapse from './collapse'
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
export * from './card-content'
export * from './card-header'
export * from './card-action'
export * from './card-media'
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
export * from './fba'
export * from './action-area'
export * from './modal'
export * from './popover'
export * from './divider'
export * from './list'
export * from './list-item'
export * from './list-item-placeholder'
export * from './collapse'

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
  FnCardContent,
  FnCardHeader,
  FnCardAction,
  FnCardMedia,
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
  FnFba,
  FnActionArea,
  FnModal,
  FnPopover,
  FnDivider,
  FnList,
  FnListItem,
  FnListItemPlaceholder,
  FnCollapse,
] as any[]

const CK = {
  install(App: any) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  },
}

export default CK
