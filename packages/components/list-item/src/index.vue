<script lang="ts" setup>
import { iconSize } from '@fusion-ui-vue/constants'
import { useNamespace } from '@fusion-ui-vue/utils'
import FnTypography from '../../typography'
import FnActionArea from '../../action-area'
import { listItemProps } from './list-item'
import useCss from './index.jss'

const props = defineProps(listItemProps)
const ns = useNamespace('list-item')
const cssClass = useCss(props)

const leadingBind = {
  icon: {
    class: [ns.m('leading'), ns.m('icon')],
    size: iconSize.medium,
  },
  avatar: {
    class: [ns.m('leading'), ns.m('avatar')],
  },
}
</script>

<template>
  <component
    :is="$props.selectable ? FnActionArea : 'li'"
    v-bind="
      $props.selectable && {
        component: 'li',
        color: $props.highlight ? 'primaryContainer' : undefined,
        highlight: $props.highlight,
      }
    "
    :class="[ns.b(), $props.highlight ? ns.m('highlight') : '', cssClass]"
  >
    <slot name="leading" v-bind="leadingBind" />
    <fn-typography
      :class="[ns.m('text')]"
      variant="label.large"
      color="inherit"
    >
      <slot />
    </fn-typography>
    <slot name="trailing" v-bind="{ class: [ns.m('trailing')] }" />
  </component>
</template>
