import type { ExtractPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import { definePropType } from '../../../utils/vue/props/runtime'

export const breadcrumbItemProps = {
  to: {
    type: definePropType<RouteLocationRaw>([String, Object]),
    default: '',
  },
  replace: {
    type: Boolean,
    default: false,
  },
}

export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
