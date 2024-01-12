import type { VNode } from 'vue'
import { computed, defineComponent, mergeProps, provide, ref } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import InButtonBase from '../../button-base'
import MoreHorizFilled from '../../svg-icon/internal/MoreHorizFilled.vue'
import { BREADCRUMB_PROVIDE_KEY, breadcrumbProps } from './breadcrumb'
import useCss from './index.jss'

export default defineComponent({
  props: breadcrumbProps,
  setup(props, { slots }) {
    const slotVNodes = slots.default?.() ?? []
    if (!slotVNodes.every((VNode: any) => VNode.type.name === 'InLink')) {
      throw new Error('<InBreadcrumb /> only accepts <InLink /> as children.')
    }

    const ns = useNamespace('breadcrumb')
    const slotsCount = computed(() => slots.default?.().length ?? 0)
    const cssStyles = useCss(props, ns)
    const showAllSlots = ref(!!props.max && +props.max < slotsCount.value)
    provide(BREADCRUMB_PROVIDE_KEY, cssStyles.value.dynamicColor)

    const slotsVNodes = computed(() =>
      (slots.default?.() ?? []).map((VNode: any) => (
        <VNode
          {...mergeProps(
            {
              underline: props.underline,
              color: props.color,
            },
            VNode.props,
          )}
        />
      )),
    )

    const separator = (() => {
      const Separator = props.separator as any
      return (
        <li class={[ns.m('separator')]}>
          {typeof Separator === 'string' ? Separator : <Separator size={20} />}
        </li>
      )
    })()

    const renderSlotsWithoutMaxLimit = () =>
      slotsVNodes.value.map((VNode: any, index: number) => (
        <>
          <li class={[ns.m('item')]}>
            <VNode />
          </li>
          {index !== slotsCount.value - 1 && separator}
        </>
      ))

    const renderSlotsWithMaxLimit = () => {
      const VNodes: VNode[] = []
      if (!props.max) {
        return VNodes
      }

      for (let i = 0; i < +props.max - 1; i++) {
        const VNode: any = slotsVNodes.value?.[i]
        VNodes.push(
          <>
            <li class={[ns.m('item')]}>
              <VNode />
            </li>
            {separator}
          </>,
        )
      }

      const ButtonBase = InButtonBase as any
      const MoreButton: any = (
        <ButtonBase
          class={[ns.em('button', 'more')]}
          onClick={() => (showAllSlots.value = !showAllSlots.value)}
        >
          <MoreHorizFilled />
        </ButtonBase>
      )

      const LastVNode: any = slotsVNodes.value?.[slotsCount.value - 1]
      VNodes.push(
        <li>
          <MoreButton />
        </li>,
        separator,
        <li class={[ns.m('item')]}>
          <LastVNode />
        </li>,
      )

      return VNodes
    }

    return () => (
      <nav class={[ns.b(), cssStyles.value.cssClass]}>
        <ol class={[ns.m('container')]}>
          {showAllSlots.value
            ? renderSlotsWithMaxLimit()
            : renderSlotsWithoutMaxLimit()}
        </ol>
      </nav>
    )
  },
})
