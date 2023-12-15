import InButtonBase from './src/button-base'
import InButton from './src/button'
import InIconButton from './src/icon-button'
import InButtonGroup from './src/button-group'
import InAlert from './src/alert'
import InLink from './src/link'
import InMessage from './src/message'
import InDialog from './src/dialog'
import InDialogHeader from './src/dialog-header'
import InDialogContent from './src/dialog-content'
import InDialogAction from './src/dialog-action'
import InInputBase from './src/input-base'
import InRadio from './src/radio'
import InCard from './src/card'
import InCardContent from './src/card-content'
import InCardHeader from './src/card-header'
import InCardAction from './src/card-action'
import InCardMedia from './src/card-media'
import InSwitch from './src/switch'
import InBadge from './src/badge'
import InProgress from './src/progress'
import InAvatar from './src/avatar'
import InAvatarGroup from './src/avatar-group'
import InCheckbox from './src/checkbox'
import InBreadcrumb from './src/breadcrumb'
import InRipple from './src/ripple'
import InDrawer from './src/drawer'
import InFormLabel from './src/form-label'
import InTypography from './src/typography'
import InTextField from './src/text-field'
import InSvgIcon from './src/svg-icon'
import InFba from './src/fba'
import InActionArea from './src/action-area'
import InModal from './src/modal'
import InPopover from './src/popover'
import InDivider from './src/divider'
import InList from './src/list'
import InListItem from './src/list-item'
import InListHeader from './src/list-item-header'
import InCollapse from './src/collapse'
import InMenu from './src/menu'
import InHeadlineText from './src/headline-text'
import InChip from './src/chip'
export * from './src/button-base'
export * from './src/avatar-group'
export * from './src/button'
export * from './src/icon-button'
export * from './src/button-group'
export * from './src/alert'
export * from './src/link'
export * from './src/message'
export * from './src/dialog'
export * from './src/dialog-header'
export * from './src/dialog-content'
export * from './src/dialog-action'
export * from './src/input-base'
export * from './src/radio'
export * from './src/switch'
export * from './src/badge'
export * from './src/progress'
export * from './src/card'
export * from './src/card-content'
export * from './src/card-header'
export * from './src/card-action'
export * from './src/card-media'
export * from './src/avatar'
export * from './src/checkbox'
export * from './src/breadcrumb'
export * from './src/drawer'
export * from './src/form-label'
export * from './src/typography'
export * from './src/ripple'
export * from './src/text-field'
export * from './src/svg-icon'
export * from './src/fba'
export * from './src/action-area'
export * from './src/modal'
export * from './src/popover'
export * from './src/divider'
export * from './src/list'
export * from './src/list-item'
export * from './src/list-item-header'
export * from './src/collapse'
export * from './src/menu'
export * from './src/headline-text'
export * from './src/chip'

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
  InFba,
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

const CK = {
  install(App: any) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  },
}

export default CK
