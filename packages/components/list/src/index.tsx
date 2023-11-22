import { defineComponent, mergeProps } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { listProps } from './list'
import useCss from './index.jss'

export default defineComponent({
  props: listProps,
  setup(props, { slots }) {
    const ns = useNamespace('list')
    const cssClass = useCss(props)

    const slotsVNodes = slots.default?.() || []
    const Comp = props.component as any
    return () => (
      <Comp
        class={[
          ns.b(),
          ns.m(`level-${props.level}`),
          props.sublist ? ns.m('sublist') : '',
          cssClass.value,
        ]}
      >
        <ul class={[ns.e('ul')]}>
          {slotsVNodes.map((VNode: any) => (
            <VNode {...mergeProps({ indent: props.level }, VNode.props)} />
          ))}
        </ul>
      </Comp>
    )
  },
})
