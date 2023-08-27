export const keysOf = <T>(arr: T) => Object.keys(arr as any) as Array<keyof T>
export const entriesOf = <T>(arr: T) => Object.entries(arr as any) as any
export { hasOwn } from '@vue/shared'
