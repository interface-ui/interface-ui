import { type ToRef, unref } from 'vue'

type Refs<T> = {
  [K in keyof T]: ToRef<T[K]>
}

export const unRefs = <T extends Refs<any>>(obj: T) => {
  const newObj: any = {}
  Object.keys(obj).forEach(key => {
    newObj[key as keyof T] = unref(obj[key as keyof T])
  })

  return newObj
}
