import { type Ref, unref } from 'vue'

type Refs<T extends object> = {
  [K in keyof T]: Ref<T[K]>
}
type UnRefs = <T extends object>(object: Refs<T>) => { [K in keyof T]: T[K] }

export const unRefs: UnRefs = obj => {
  const newObj: any = {}
  Object.keys(obj).forEach(key => {
    // @ts-expect-error: ignore
    newObj[key] = unref(obj[key])
  })

  return newObj
}
