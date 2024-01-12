/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-mixed-operators */
import { computed, inject, ref, unref } from 'vue'
import type { InjectionKey, Ref } from 'vue'
import { toKebabCase } from '../javascript'

export const defaultNamespace = 'in'
const statePrefix = 'is-'

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string,
) => {
  let cls = `${namespace}-${block}`
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }

  if (element) {
    cls += `__${element}`
  }

  if (modifier) {
    cls += `--${modifier}`
  }

  return cls
}

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('namespaceContextKey')

export const useGetDerivedNamespace = (
  namespaceOverrides?: Ref<string | undefined>,
) => {
  const derivedNamespace =
    namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace))
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace
  })
  return namespace
}

export const useNamespace = (
  block: string,
  namespaceOverrides?: Ref<string | undefined>,
) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides)
  const b = (blockSuffix = '') =>
    _bem(namespace.value, block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? _bem(namespace.value, block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? _bem(namespace.value, block, '', '', modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(namespace.value, block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(namespace.value, block, '', element, modifier)
      : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(namespace.value, block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace.value, block, blockSuffix, element, modifier)
      : ''
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  // css in style
  const cssStyle = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      if (object[key]) {
        styles[`${key}`] = object[key]
      }
    }
    return styles
  }

  // for css var
  // --in-xxx: value;
  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-sys-${toKebabCase(key)}`] = object[key]
      }
    }
    return styles
  }
  // with block
  const cssVarBlock = (object: Record<string, string | number>) => {
    const styles: Record<string, string | number> = {}
    for (const key in object) {
      if (object[key])
        styles[`--${namespace.value}-${block}-${toKebabCase(key)}`] =
          object[key]
    }
    return styles
  }

  const cssVarName = (name: string) =>
    `--${namespace.value}-${toKebabCase(name)}`
  const cssVarBlockName = (name: string) =>
    `--${namespace.value}-${block}-${toKebabCase(name)}`

  const getCssVar = (name: string) =>
    `var(--${namespace.value}-${toKebabCase(name)})`
  const getCssVarBlock = (name: string, blockOverrides: string = block) =>
    `var(--${namespace.value}-${toKebabCase(blockOverrides)}-${toKebabCase(
      name,
    )})`

  const getGlobalTokens = (
    scope:
      | 'color'
      | 'elevation'
      | 'zIndex'
      | 'state'
      | 'shape'
      | 'motion'
      | 'typescale',
    name: string,
  ) => `var(--md-sys-${toKebabCase(scope)}-${toKebabCase(name)})`

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssStyle,
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
    getCssVar,
    getCssVarBlock,
    getGlobalTokens,
  }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>
