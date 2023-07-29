export const isUndefined = (val: any): val is undefined => val === undefined
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isNumber = (val: any): val is number => typeof val === 'number'

export const isStringNumber = (val: string): boolean => {
  if (!(typeof val === 'string'))
    return false

  return !Number.isNaN(Number(val))
}
