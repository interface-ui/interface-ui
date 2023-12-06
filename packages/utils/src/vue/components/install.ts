/* eslint-disable @typescript-eslint/no-extra-semi */
import type { App, AppContext, Component, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export function withInstall<T extends Component>(comp: T, name: string) {
  ;(comp as SFCWithInstall<T>).install = (app: App) => {
    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
