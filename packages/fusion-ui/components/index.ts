import FnButton from './button'
import FnIcon from './icon'
import FnLink from './link'
import FnMessage from './message'
import FnDialog from './dialog'
import FnInput from './input'
import FnRadio from './radio'
import FnSwitch from './switch'
import FnBadge from './badge'
import FnProgress from './progress'

export * from './_hooks'
export * from './button'
export * from './icon'
export * from './link'
export * from './message'
export * from './dialog'
export * from './input'
export * from './radio'
export * from './switch'
export * from './badge'
export * from './progress'

const component = [FnButton, FnIcon, FnLink, FnMessage, FnDialog, FnInput, FnRadio, FnSwitch, FnBadge, FnProgress]

const CK = {
  install(App: any) {
    component.forEach((item) => {
      console.log(item.name)
      App.component(item.name, item)
    })
  },
}

// export default Icon;
export default CK
