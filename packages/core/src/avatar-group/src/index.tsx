import { defineComponent, mergeProps, toRefs } from 'vue'
import { unRefs, useNamespace } from '@interface-ui/utils'
import { InAvatar } from '../../avatar'
import { avatarGroupProps } from './avatar-group'
import useCss from './index.jss'

export default defineComponent({
  props: avatarGroupProps,
  setup(props, { slots }) {
    const { max, avatarBorder: _, ...avatarProps } = toRefs(props)
    const ns = useNamespace('avatar-group')
    const slotVNodes = slots?.default?.() ?? []
    if (!slotVNodes.every((VNode: any) => VNode.type.name === 'InAvatar')) {
      throw new Error(
        '<InAvatarGroup /> only accepts <InAvatar /> as children.',
      )
    }

    const cssClass = useCss(props, ns)

    return () => (
      <div class={[ns.b(), cssClass.value]}>
        {slots
          .default?.()
          .slice(0, Math.min(+max.value, slotVNodes.length))
          .reduce((pre: any[], VNode: any, index: number) => {
            pre.push(
              <VNode {...mergeProps(unRefs(avatarProps), VNode.props ?? {})} />,
            )

            if (
              index === Math.min(+max.value, slotVNodes.length) - 1 &&
              +max.value < slotVNodes.length
            ) {
              pre.push(
                <InAvatar
                  {...mergeProps(unRefs(avatarProps), VNode.props ?? {})}
                >
                  +{slotVNodes.length - +max.value}
                </InAvatar>,
              )
            }

            return pre
          }, [])
          .reverse()}
      </div>
    )
  },
})
