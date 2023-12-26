<script lang="ts" setup>
import { iconSize } from '@interface-ui/constants'
import { useNamespace } from '@interface-ui/utils'
import InTypography from '../../typography'
import InActionArea from '../../action-area'
import { listItemProps } from './list-item'
import useCss from './index.jss'

const props = defineProps(listItemProps)
const ns = useNamespace('list-item')
const cssClass = useCss(props)

const leadingBind = {
  icon: {
    class: [ns.m('leading'), ns.m('icon')],
    size: iconSize.medium,
    color: 'inherit',
  },
  avatar: {
    class: [ns.m('leading'), ns.m('avatar')],
  },
}
</script>

<template>
  <component
    :is="$props.selectable ? InActionArea : 'li'"
    v-bind="$props.selectable && { component: 'li' }"
    :class="[ns.b(), $props.highlight ? ns.m('highlight') : '', cssClass]"
  >
    <slot name="leading" v-bind="leadingBind" />
    <in-typography
      :class="[ns.m('text')]"
      variant="label.large"
      color="inherit"
    >
      <slot />
    </in-typography>
    <slot name="trailing" v-bind="{ class: [ns.m('trailing')] }" />
  </component>
</template>
