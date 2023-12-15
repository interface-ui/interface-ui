import type { AcceptableColor } from '@interface-ui/theme'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const linkUnderlineStyles = ['none', 'hover', 'always'] as const
export type LinkUnderlineStyles = typeof linkUnderlineStyles[number]

export const linkProps = {
  underline: {
    type: String as PropType<LinkUnderlineStyles>,
    values: linkUnderlineStyles,
    default: 'always',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  component: {
    type: [String, Object] as PropType<string | Component>,
    default: 'a',
  },
  cs: {
    type: [Object, String],
  },
}

export type LinkProps = ExtractPropTypes<typeof linkProps>
