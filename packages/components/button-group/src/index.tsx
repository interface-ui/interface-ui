import { unRefs, useNamespace } from '@fusion-ui-vue/utils'
import { computed, defineComponent, mergeProps, toRefs } from 'vue'
import { css, cx, useColor, useRgbColor } from '@fusion-ui-vue/theme'
import { buttonGroupProps } from './button-group'

export default defineComponent({
  props: buttonGroupProps,
  setup(props, { slots, attrs }) {
    const ns = useNamespace('button-group')
    const { orientation, ...buttonProps } = toRefs(props)
    const $color = useColor(props, 'color', 'var(--md-sys-color-primary)')
    const $colorRgb = useRgbColor(
      props,
      'color',
      'var(--md-sys-color-primary-rgb)'
    )
    const cssClass = computed(
      () => css`
        --fn-button-group-color: ${$color.value};
        --fn-button-group-color-rgb: ${$colorRgb.value};
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

    const slotsVNodes = (slots?.default?.() ?? []).map((VNode: any) => (
      <VNode {...mergeProps(unRefs(buttonProps), attrs, VNode.props ?? {})} />
    ))

    return () => <div class={classList.value}>{slotsVNodes}</div>
  },
})
