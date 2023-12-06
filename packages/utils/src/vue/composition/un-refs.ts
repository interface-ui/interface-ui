import { type Ref, unref } from 'vue'

type Refs<T extends object> = {
  [K in keyof T]: Ref<T[K]>
}
type UnRefs = <T extends object>(object: Refs<T>) => T

export const unRefs: UnRefs = <T extends object>(obj: Refs<T>) => {
  const newObj: T = {} as any
  Object.keys(obj).forEach(key => {
    newObj[key as keyof T] = unref(obj[key as keyof T])
  })

  return newObj
}
