import { unRefs, useNamespace } from '@fusion-ui-vue/utils'
import {
  computed,
  createElementVNode,
  defineComponent,
  mergeProps,
  toRefs,
} from 'vue'
import { css, cx, useColor } from '@fusion-ui-vue/theme'
import { buttonGroupProps } from './button-group'

export default defineComponent({
  props: buttonGroupProps,
  setup(props, { slots, attrs }) {
    const ns = useNamespace('button-group')
    const { orientation, ...buttonProps } = toRefs(props)
    const $color = useColor(props.color)
    const cssClass = computed(
      () => css`
        --fn-button-group-color: ${$color.value ??
        'var(--md-sys-color-primary)'};
      `
    )
    const classList = computed(() => {
      const { variant, shape, size } = unRefs(buttonProps)
      return cx([
        ns.b(),
        ns.m(size),
        ns.m(shape),
        ns.m(variant),
        ns.m(orientation.value),
        cssClass.value,
      ])
    })

    const slotsVNodes = slots?.default?.() ?? []
    slotsVNodes.forEach(vnode => {
      vnode.props = mergeProps(unRefs(buttonProps), attrs, vnode?.props ?? {})
    })

    return () => {
      return createElementVNode('div', { class: classList.value }, slotsVNodes)
    }
  },
})
