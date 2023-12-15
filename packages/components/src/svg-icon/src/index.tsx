import { computed, defineComponent } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import { svgIconProps } from './svg-icon'
import useCss from './index.jss'

export default defineComponent({
  props: svgIconProps,
  setup(props, { slots }) {
    const ns = useNamespace('svg-icon')
    const cssClass = useCss(props)
    const slotsVNodes = computed(() => slots?.default?.() ?? [])
    if (slotsVNodes.value.length > 1) {
      throw new Error('[Interface UI]: The SvgIcon can only contain one child.')
    }

    const Comp = props.component as any
    return () => (
      <Comp class={[ns.b(), cssClass.value]} {...slotsVNodes.value[0]?.props}>
        {slotsVNodes.value[0]?.children}
      </Comp>
    )
  },
})
