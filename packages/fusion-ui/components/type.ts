import type { AppContext, Plugin } from 'vue'

export type ComponentState = 'info' | 'success' | 'warning' | 'danger'

export type ComponentColor =
  | 'blue'
  | 'teal'
  | 'red'
  | 'yellow'
  | 'gray'
  | 'deepGray'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type SizeType = 'xs' | 'sm' | 'md' | 'lg'
export type DirectionType = 'top' | 'right' | 'bottom' | 'left'
export type StatusType = 'primary' | 'success' | 'warning' | 'error' | 'info'
