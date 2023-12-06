import { isString } from '@vue/shared'
class InterfaceUIError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'InterfaceUIError'
  }
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new InterfaceUIError(`[${scope}] ${message}`)
      : scope
    // eslint-disable-next-line no-console
    console.warn(error)
  }
}
