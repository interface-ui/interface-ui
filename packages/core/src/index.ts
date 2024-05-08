import type { App } from 'vue'
import InButtonBase from './button-base'
import InButton from './button'
import InIconButton from './icon-button'
import InButtonGroup from './button-group'
import InAlert from './alert'
import InLink from './link'
import InMessage from './message'
import InDialog from './dialog'
import InDialogHeader from './dialog-header'
import InDialogContent from './dialog-content'
import InDialogAction from './dialog-action'
import InInputBase from './input-base'
import InRadio from './radio'
import InCard from './card'
import InCardContent from './card-content'
import InCardHeader from './card-header'
import InCardAction from './card-action'
import InCardMedia from './card-media'
import InSwitch from './switch'
import InBadge from './badge'
import InProgress from './progress'
import InAvatar from './avatar'
import InAvatarGroup from './avatar-group'
import InCheckbox from './checkbox'
import InBreadcrumb from './breadcrumb'
import InRipple from './ripple'
import InDrawer from './drawer'
import InFormLabel from './form-label'
import InTypography from './typography'
import InTextField from './text-field'
import InSvgIcon from './svg-icon'
import InFab from './fab'
import InActionArea from './action-area'
import InModal from './modal'
import InPopover from './popover'
import InDivider from './divider'
import InList from './list'
import InListItem from './list-item'
import InListHeader from './list-item-header'
import InCollapse from './collapse'
import InMenu from './menu'
import InHeadlineText from './headline-text'
import InChip from './chip'
export * from './button-base'
export * from './avatar-group'
export * from './button'
export * from './icon-button'
export * from './button-group'
export * from './alert'
export * from './link'
export * from './message'
export * from './dialog'
export * from './dialog-header'
export * from './dialog-content'
export * from './dialog-action'
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
export * from './avatar'
export * from './checkbox'
export * from './breadcrumb'
export * from './drawer'
export * from './form-label'
export * from './typography'
export * from './ripple'
export * from './text-field'
export * from './svg-icon'
export * from './fab'
export * from './action-area'
export * from './modal'
export * from './popover'
export * from './divider'
export * from './list'
export * from './list-item'
export * from './list-item-header'
export * from './collapse'
export * from './menu'
export * from './headline-text'
export * from './chip'

export const components = [
  InButtonBase,
  InButton,
  InIconButton,
  InButtonGroup,
  InAlert,
  InLink,
  InMessage,
  InDialog,
  InDialogHeader,
  InDialogContent,
  InDialogAction,
  InInputBase,
  InRadio,
  InSwitch,
  InBadge,
  InProgress,
  InCard,
  InCardContent,
  InCardHeader,
  InCardAction,
  InCardMedia,
  InAvatar,
  InAvatarGroup,
  InCheckbox,
  InBreadcrumb,
  InRipple,
  InDrawer,
  InFormLabel,
  InTypography,
  InTextField,
  InSvgIcon,
  InFab,
  InActionArea,
  InModal,
  InPopover,
  InDivider,
  InList,
  InListItem,
  InListHeader,
  InCollapse,
  InMenu,
  InHeadlineText,
  InChip,
] as any[]

export default {
  install(app: App) {
    components.forEach(item => {
      app.component(item.name, item)
    })
  },
}
