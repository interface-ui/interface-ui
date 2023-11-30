/* eslint-disable multiline-ternary */
import type { VNode } from 'vue'
import { computed, defineComponent, mergeProps, ref } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import FnButtonBase from '../../button-base'
import MoreHorizFilled from '../../svg-icon/internal/MoreHorizFilled.vue'
import { breadcrumbProps } from './breadcrumb'
import useCss from './index.jss'

export default defineComponent({
  props: breadcrumbProps,
  setup(props, { slots }) {
    const ns = useNamespace('breadcrumb')
    const slotsCount = computed(() => slots.default?.().length ?? 0)
    const cssClass = useCss(props)
    const Separator = props.separator as any
    const maxValue = ref(props.max)
    // const showAllSlots = ref(!!props.max && +props.max < slotsCount.value)
    const showAllSlots = computed(() => !!maxValue.value && +maxValue.value < slotsCount.value)

    const slotsVNodes = computed(() =>
      (slots.default?.() ?? []).map((VNode: any) => (
        <VNode
          {...mergeProps(
            {
              underline: props.underline,
              color: 'inherit',
              cs: { '--fn-link-color-rgb': 'var(--fn-breadcrumb-color-rgb)' },
            },
            VNode.props
          )}
        />
      ))
    )

    const slotsWithoutMaxLimit = computed(() =>
      slotsVNodes.value.map((VNode: any, index: number) => (
        <>
          <li class={[ns.m('item')]}>
            <VNode />
          </li>
          {index !== slotsCount.value - 1 && (
            <li class={[ns.m('separator')]}>
              {typeof Separator === 'string' ? (
                Separator
              ) : (
                <Separator size={20} />
              )}
            </li>
          )}
        </>
      ))
    )

    const slotsWithMaxLimit = computed(() => {
      const VNodes: Array<VNode | string> = []
      if (!props.max) {
        return VNodes
      }

      for (let i = 0; i < +props.max - 1; i++) {
        VNodes.push(
          <>
            <li class={[ns.m('item')]}>{slotsVNodes.value?.[i] ?? null}</li>
            <li class={[ns.m('separator')]}>
              {typeof Separator === 'string' ? (
                Separator
              ) : (
                <Separator size={20} />
              )}
            </li>
          </>
        )
      }

      const ButtonBase = FnButtonBase as any
      const MoreButton: any = (
        <ButtonBase
        class={[ns.em('button', 'more')]}
        onClick={() => (maxValue.value = showAllSlots.value ? slotsCount.value : +maxValue.value)}
      >
        <MoreHorizFilled />
      </ButtonBase>
      )

      VNodes.push(
        <li>
          <MoreButton />
        </li>,
        <li class={[ns.m('separator')]}>
          {typeof Separator === 'string' ? Separator : <Separator size={20} />}
        </li>,
        <li class={[ns.m('item')]}>
          {slotsVNodes.value?.[slotsCount.value - 1]}
        </li>
      )

      return VNodes
    })

    return () => (
      <nav class={[ns.b(), cssClass.value]}>
        <ol class={[ns.m('container')]}>
          {showAllSlots.value
            ? slotsWithMaxLimit.value
            : slotsWithoutMaxLimit.value}
        </ol>
      </nav>
    )
  },
})
