import { computed, defineComponent, mergeProps, toRefs } from 'vue'
import { unRefs, useNamespace } from '@interface-ui/utils'
import { css, cx } from '@interface-ui/theme'
import { InAvatar } from '../../avatar'
import { avatarGroupProps } from './avatar-group'

export default defineComponent({
  props: avatarGroupProps,
  setup(props, { slots, attrs }) {
    const { max, avatarBorder, ...avatarProps } = toRefs(props)
    const ns = useNamespace('avatar-group')
    const slotsVNodes = slots?.default?.() ?? []

    let vNodes = slotsVNodes
    if (max.value && +max.value < slotsVNodes.length) {
      const count = slotsVNodes.length - +max.value
      vNodes = [
        ...(slotsVNodes.slice(0, +max.value) as any),
        (<InAvatar>+{count}</InAvatar>) as any,
      ]
    }

    const renderVNodes = computed(() => {
      return vNodes.map((VNode: any) => (
        <VNode {...mergeProps(unRefs(avatarProps), VNode.props ?? {})} />
      ))
    })

    const classList = computed(() => {
      const classes = (attrs?.class as string)?.split(' ') ?? []
      classes.push(ns.b())
      classes.push(css`
        & .in-avatar {
          border: 2px solid ${avatarBorder.value};
        }
      `)
      return cx(classes)
    })

    return () => (
      <div {...mergeProps(attrs, { class: classList.value })}>
        {renderVNodes.value.reverse()}
      </div>
    )
  },
})
