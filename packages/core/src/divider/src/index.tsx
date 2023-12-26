/* eslint-disable multiline-ternary */
import { defineComponent } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import InTypography from '../../typography'
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
      // eslint-disable-next-line no-mixed-operators
      props.orientation === 'horizontal' && slotsVNodes ? (
        <div
          class={[
            ns.b(),
            ns.m(props.variant),
            ns.m(props.orientation),
            ns.em('div', 'with-slots'),
            ns.em('text', props.textAlign),
            props.noMargin ? ns.m('no-margin') : '',
            cssClass.value,
          ]}
        >
          <InTypography
            component="span"
            cs={{ opacity: 0.8 }}
            class={[ns.m('text')]}
          >
            {slotsVNodes}
          </InTypography>
        </div>
      ) : (
        <Comp
          class={[
            ns.b(),
            ns.m(props.variant),
            ns.m(props.orientation),
            props.noMargin ? ns.m('no-margin') : '',
            cssClass.value,
          ]}
        />
      )
  },
})
