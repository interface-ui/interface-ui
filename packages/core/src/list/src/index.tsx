/* eslint-disable multiline-ternary */
/* eslint-disable quote-props */
import { defineComponent } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import { listProps } from './list'
import useCss from './index.jss'

export default defineComponent({
  props: listProps,
  setup(props, { slots }) {
    const ns = useNamespace('list')
    const cssClass = useCss(props, ns)

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
          {slots.default?.().map((VNode: any) =>
            VNode.type.name === 'InListItem' ? (
              <VNode
                {...{
                  indent: props.level,
                  selectable: props.selectable,
                  'highlight-color': props.highlightColor,
                  'align-items': props.alignItems,
                  ...VNode.props,
                }}
              />
            ) : (
              <VNode />
            ),
          )}
        </ul>
      </Comp>
    )
  },
})
