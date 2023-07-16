import FnButton from './button'
import FnIcon from './icon'
import FnLink from './link'
export * from './button'
export * from './icon'
export * from './link'
// export default {
//   Button,
//   Icon,
// }
const component = [FnButton, FnIcon, FnLink]

const CK = {
  install(App: any) {
    component.forEach((item) => {
      App.component(item.name, item)
      console.log(item.name)
    })
  },
}

// export default Icon;
export default CK
