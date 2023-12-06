import type { AcceptableColor } from '@fusion-ui-vue/theme'
import type { ExtractPropTypes, PropType } from 'vue'

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
  cs: {
    type: [Object, String],
  },
}

export type LinkProps = ExtractPropTypes<typeof linkProps>
