import type { App, AppContext, Plugin } from 'vue'
import { NOOP } from '@vue/shared'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E,
) => {
  (main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})])
      app.component(comp.__name, comp)
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra))
      (main as any)[key] = comp
  }
  return main as SFCWithInstall<T> & E
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach(c => app.use(c))
  }

  return {
    install,
    version: '__VERSION__',
  }
}

export const withNoopInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = NOOP

  return component as SFCWithInstall<T>
}
