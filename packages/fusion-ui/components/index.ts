import FnButton from './button'
import FnIcon from './icon'
export * from './button'
export * from './icon'
// export default {
//   Button,
//   Icon,
// }
const component = [FnButton, FnIcon]

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
