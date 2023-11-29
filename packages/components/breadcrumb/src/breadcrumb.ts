import { buildProps } from '@fusion-ui-vue/utils'
import type { Component, ExtractPropTypes, PropType } from 'vue'
import type { AcceptableColor } from '@fusion-ui-vue/theme'
import type { LinkUnderlineStyles } from '../../link'
import { linkUnderlineStyles } from '../../link'

export const breadcrumbProps = buildProps({
  underline: {
    type: String as PropType<LinkUnderlineStyles>,
    values: linkUnderlineStyles,
    default: 'hover',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'onSurface',
  },
  separator: {
    type: [String, Object] as PropType<string | Component>,
    default: '/',
  },
  max: {
    type: [String, Number],
  },
  cs: {
    type: [Object, String],
  },
})

export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
