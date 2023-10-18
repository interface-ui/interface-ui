import type { UseNamespaceReturn } from '@fusion-ui-vue/utils'
import type { ComputedRef } from 'vue'

export type ComponentStylingHook<P, R = string> = (
  props: P,
  ns?: UseNamespaceReturn
) => ComputedRef<R>
