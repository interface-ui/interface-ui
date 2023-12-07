/* eslint-disable no-mixed-operators */
/* eslint-disable @typescript-eslint/indent */
import { warn } from 'vue'
import { fromPairs } from 'lodash-unified'
import type { PropType } from 'vue'
import { hasOwn, isObject } from '@vue/shared'

import type {
  IfInProp,
  IfNativePropType,
  InProp,
  InPropConvert,
  InPropFinalized,
  InPropInput,
  InPropMergeType,
  NativePropType,
} from './types'

export const inPropKey = '__epPropKey'

export const definePropType = <T>(val: any): PropType<T> => val

export const isEpProp = (val: unknown): val is InProp<any, any, any> =>
  isObject(val) && !!(val as any)[inPropKey]

/**
 * @description Build prop. It can better optimize prop types
 * @description 生成 prop，能更好地优化类型
 * @example
  // limited options
  // the type will be PropType<'light' | 'dark'>
  buildProp({
    type: String,
    values: ['light', 'dark'],
  } as const)
  * @example
  // limited options and other types
  // the type will be PropType<'small' | 'large' | number>
  buildProp({
    type: [String, Number],
    values: ['small', 'large'],
    validator: (val: unknown): val is number => typeof val === 'number',
  } as const)
  @link see more: https://github.com/element-plus/element-plus/pull/3341
 */
export const buildProp = <
  Type = never,
  Value = never,
  Validator = never,
  Default extends InPropMergeType<Type, Value, Validator> = never,
  Required extends boolean = false
>(
  prop: InPropInput<Type, Value, Validator, Default, Required>,
  key?: string
): InPropFinalized<Type, Value, Validator, Default, Required> => {
  // filter native prop type and nested prop, e.g `null`, `undefined` (from `buildProps`)
  if (!isObject(prop) || isEpProp(prop)) {
    return prop as any
  }

  const { values, required, default: defaultValue, type, validator } = prop

  const _validator =
    values || validator
      ? (val: unknown) => {
          let valid = false
          let allowedValues: unknown[] = []

          if (values) {
            allowedValues = Array.from(values)
            if (hasOwn(prop, 'default')) {
              allowedValues.push(defaultValue)
            }

            valid ||= allowedValues.includes(val)
          }
          if (validator) {
            valid ||= validator(val)
          }

          if (!valid && allowedValues.length > 0) {
            const allowValuesText = [...new Set(allowedValues)]
              .map(value => JSON.stringify(value))
              .join(', ')
            warn(
              `Invalid prop: validation failed${
                key ? ` for prop "${key}"` : ''
              }. Expected one of [${allowValuesText}], got value ${JSON.stringify(
                val
              )}.`
            )
          }
          return valid
        }
      : undefined

  const epProp: any = {
    type,
    required: !!required,
    validator: _validator,
    [inPropKey]: true,
  }
  if (hasOwn(prop, 'default')) {
    epProp.default = defaultValue
  }
  return epProp
}

export const buildProps = <
  Props extends Record<
    string,
    | { [inPropKey]: true }
    | NativePropType
    | InPropInput<any, any, any, any, any>
  >
>(
  props: Props
): {
  [K in keyof Props]: IfInProp<
    Props[K],
    Props[K],
    IfNativePropType<Props[K], Props[K], InPropConvert<Props[K]>>
  >
} =>
  fromPairs(
    Object.entries(props).map(([key, option]) => [
      key,
      buildProp(option as any, key),
    ])
  ) as any
