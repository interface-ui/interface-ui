import FnButtonBase from './src/button-base'
import FnButton from './src/button'
import FnIconButton from './src/icon-button'
import FnButtonGroup from './src/button-group'
import FnAlert from './src/alert'
import FnLink from './src/link'
import FnMessage from './src/message'
import FnDialog from './src/dialog'
import FnDialogHeader from './src/dialog-header'
import FnDialogContent from './src/dialog-content'
import FnDialogAction from './src/dialog-action'
import FnInputBase from './src/input-base'
import FnRadio from './src/radio'
import FnCard from './src/card'
import FnCardContent from './src/card-content'
import FnCardHeader from './src/card-header'
import FnCardAction from './src/card-action'
import FnCardMedia from './src/card-media'
import FnSwitch from './src/switch'
import FnBadge from './src/badge'
import FnProgress from './src/progress'
import FnAvatar from './src/avatar'
import FnAvatarGroup from './src/avatar-group'
import FnCheckbox from './src/checkbox'
import FnBreadcrumb from './src/breadcrumb'
import FnRipple from './src/ripple'
import FnDrawer from './src/drawer'
import FnFormLabel from './src/form-label'
import FnTypography from './src/typography'
import FnSwitchNew from './src/switch-new'
import FnTextField from './src/text-field'
import FnSvgIcon from './src/svg-icon'
import FnFba from './src/fba'
import FnActionArea from './src/action-area'
import FnModal from './src/modal'
import FnPopover from './src/popover'
import FnDivider from './src/divider'
import FnList from './src/list'
import FnListItem from './src/list-item'
import FnListHeader from './src/list-item-header'
import FnCollapse from './src/collapse'
import FnMenu from './src/menu'
import FnHeadlineText from './src/headline-text'
import FnChip from './src/chip'
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
export * from './src/switch-new'
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
  FnButtonBase,
  FnButton,
  FnIconButton,
  FnButtonGroup,
  FnAlert,
  FnLink,
  FnMessage,
  FnDialog,
  FnDialogHeader,
  FnDialogContent,
  FnDialogAction,
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
  FnAvatar,
  FnAvatarGroup,
  FnCheckbox,
  FnBreadcrumb,
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
  FnListHeader,
  FnCollapse,
  FnMenu,
  FnHeadlineText,
  FnChip,
] as any[]

const CK = {
  install(App: any) {
    components.forEach(item => {
      App.component(item.name, item)
    })
  },
}

export default CK
