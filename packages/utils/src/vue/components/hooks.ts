import type { ComputedRef } from 'vue'
import type { UseNamespaceReturn } from '../../dom'

export type ComponentStylingHook<P, R = string> = (
  props: P,
  ns?: UseNamespaceReturn,
) => ComputedRef<R>
