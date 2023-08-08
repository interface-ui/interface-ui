import { isNumber, isStringNumber } from './types'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value)
    return ''
  if (isNumber(value) || isStringNumber(value))
    return `${value}${defaultUnit}`

  else if ((typeof value === 'string'))
    return value

//   debugWarn(SCOPE, 'binding value must be a string or number')
}
