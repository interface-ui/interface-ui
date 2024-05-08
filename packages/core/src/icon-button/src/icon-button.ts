import type { ComponentSizes } from '@interface-ui/constants'
import { componentSizes } from '@interface-ui/constants'
import type { AcceptableColor } from '@interface-ui/theme'
import { buildProps } from '@interface-ui/utils'
import type { ExtractPropTypes, PropType } from 'vue'

export const iconSizeMapping: Record<ComponentSizes, number> = {
  small: 20,
  medium: 24,
  large: 28,
}

export const iconButtonProps = buildProps({
  size: {
    type: String as PropType<ComponentSizes>,
    values: componentSizes,
    default: 'medium',
  },
  color: {
    type: [String, Function] as PropType<AcceptableColor>,
    default: 'primary',
  },
  cs: {
    type: [Object, String],
  },
})

export type IconButtonProps = ExtractPropTypes<typeof iconButtonProps>
