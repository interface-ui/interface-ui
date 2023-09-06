import type { ExtractPropTypes } from 'vue'

export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/',
  },
}

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
