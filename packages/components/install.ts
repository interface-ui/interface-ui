import type { App, Component } from 'vue'
import type { SFCInstallWithContext, SFCWithInstall } from './type'
// export type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends Component>(comp: T, name: string) {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}
export const withInstallFunction = <T>(fn: T, name: string) => {
  (fn as SFCWithInstall<T>).install = (app: App) => {
    (fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
