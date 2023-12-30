import { unRefs, useNamespace } from '@interface-ui/utils'
import { defineComponent, mergeProps, provide, toRefs } from 'vue'
import { BUTTON_GROUP_PROVIDE_KEY, buttonGroupProps } from './button-group'
import useCss from './index.jss'

export default defineComponent({
  props: buttonGroupProps,
  setup(props, { slots, attrs }) {
    const ns = useNamespace('button-group')
    const { orientation: _, ...buttonProps } = toRefs(props)
    const cssStyles = useCss(props, ns)
    provide(BUTTON_GROUP_PROVIDE_KEY, cssStyles.value.dynamicColor)

    return () => (
      <div
        class={[
          ns.b(),
          ns.m(props.size),
          ns.m(props.shape),
          ns.m(props.variant),
          ns.m(props.orientation),
          cssStyles.value.cssClass,
        ]}
      >
        {slots
          ?.default?.()
          ?.map((VNode: any) => (
            <VNode {...mergeProps(unRefs(buttonProps), attrs, VNode.props)} />
          ))}
      </div>
    )
  },
})
