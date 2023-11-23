/* eslint-disable multiline-ternary */
import { defineComponent } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import FnTypography from '../../typography'
import { dividerProps } from './divider'
import useCss from './index.jss'

export default defineComponent({
  props: dividerProps,
  setup(props, { slots }) {
    const ns = useNamespace('divider')
    const cssClass = useCss(props)

    const slotsVNodes = slots.default?.()
    const Comp = props.component as any

    return () =>
      slotsVNodes ? (
        <div
          class={[
            ns.b(),
            ns.m(props.variant),
            ns.m(props.orientation),
            ns.em('div', 'with-slots'),
            ns.em('text', props.textAlign),
            cssClass.value,
          ]}
        >
          <FnTypography
            component="span"
            cs={{ opacity: 0.8 }}
            class={[ns.m('text')]}
          >
            {slotsVNodes}
          </FnTypography>
        </div>
      ) : (
        <Comp
          class={[
            ns.b(),
            ns.m(props.variant),
            ns.m(props.orientation),
            cssClass.value,
          ]}
        />
      )
  },
})
