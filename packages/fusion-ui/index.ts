import Components from './components'
export * from '@fusion-ui/components'
const CK = {
  install(App: any) {
    Components.forEach((item: any) => {
      App.component(item.name, item)
    })
  },
}
export default CK
