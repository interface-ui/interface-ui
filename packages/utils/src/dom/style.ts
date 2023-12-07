import { isString } from '@vue/shared'
import { isNumber } from '@vueuse/core'
import { debugWarn, isStringNumber } from '../javascript'

const SCOPE = 'utils/dom/style'

export function addUnit(value: string | number, defaultUnit = 'px') {
  const isNumberType = isNumber(value) || isStringNumber(value)
  if (!isNumberType && !value) {
    return ''
  }

  if (isNumberType) {
    return `${value}${defaultUnit}`
  } else if (isString(value)) {
    return value
  }

  debugWarn(SCOPE, 'binding value must be a string or number')
  return value
}
