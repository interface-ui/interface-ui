import type { UseNamespaceReturn } from '@interface-ui/utils'
import type { ComputedRef } from 'vue'

export type ComponentStylingHook<P, R = string> = (
  props: P,
  ns?: UseNamespaceReturn
) => ComputedRef<R>
