import { defineComponent } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { svgIconProps } from './svg-icon'
import useCss from './style'

export default defineComponent({
  props: svgIconProps,
  setup(props, { slots }) {
    const ns = useNamespace('svg-icon')
    const cssClass = useCss(props)
    const slotsVNodes = slots?.default?.() ?? []
    if (slotsVNodes.length > 1) {
      console.error('[Fusion UI]: The SvgIcon can only contain one child.')
      return () => ''
    }

    return () => (
      <svg class={[ns.b(), cssClass.value]} {...slotsVNodes[0]?.props}>
        {slotsVNodes[0]?.children}
      </svg>
    )
  },
})
