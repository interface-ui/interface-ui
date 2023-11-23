/* eslint-disable quote-props */
import { defineComponent } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { listProps } from './list'
import useCss from './index.jss'

export default defineComponent({
  props: listProps,
  setup(props, { slots }) {
    const ns = useNamespace('list')
    const cssClass = useCss(props)

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
          {slots.default?.().map((VNode: any) => (
            <VNode
              {...{
                indent: props.level,
                selectable: props.selectable,
                'highlight-color': props.highlightColor,
                'align-items': props.alignItems,
                ...VNode.props,
              }}
            />
          ))}
        </ul>
      </Comp>
    )
  },
})
