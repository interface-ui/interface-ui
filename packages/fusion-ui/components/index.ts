import FnButton from './button'
import FnIcon from './icon'
import FnLink from './link'
import FnMessage from './message'
import FnDialog from './dialog'
import FnInput from './input'
export * from './button'
export * from './icon'
export * from './link'
export * from './message'
export * from './dialog'
export * from './input'
// export default {
//   Button,
//   Icon,
// }
const component = [FnButton, FnIcon, FnLink, FnMessage, FnDialog, FnInput]

const CK = {
  install(App: any) {
    component.forEach((item) => {
      App.component(item.name, item)
    })
  },
}

// export default Icon;
export default CK
