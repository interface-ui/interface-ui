<script lang="ts">
import { useNamespace } from '@fusion-ui-vue/utils/useNamespace'
import { computed, createElementVNode } from 'vue'
import { useButtonGroup } from '@fusion-ui-vue/hooks'
import { buttonGroupProps } from './button-group'

export default {
  props: buttonGroupProps,
  setup(props, { slots, attrs }) {
    const ns = useNamespace('button-group')
    const { orientation, ...buttonProps } = props
    const classes = useButtonGroup(props, ns)
    const classList = computed(() => {
      const { variant, shape, size } = buttonProps
      return [
        ns.b(),
        ns.m(size),
        ns.m(shape),
        ns.m(variant),
        ns.m(orientation),
        classes.value[ns.b()],
      ].join(' ')
    })

    const slotsVNodes = slots?.default?.() ?? []
    slotsVNodes.forEach(vnode => {
      vnode.props = { ...buttonProps, ...attrs }
    })

    return () => {
      return createElementVNode('div', { class: classList.value }, slotsVNodes)
    }
  },
}
</script>
