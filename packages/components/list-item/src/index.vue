<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnTypography from '../../typography'
import FnActionArea from '../../action-area'
import { listItemProps } from './list-item'
import useCss from './index.jss'

const props = defineProps(listItemProps)
const ns = useNamespace('list-item')
const cssClass = useCss(props)
</script>

<template>
  <fn-action-area component="li" :class="[ns.b(), cssClass]">
    <slot
      name="leading"
      v-bind="{
        class: [ns.m('leading')],
        color: 'var(--md-sys-color-on-surface-variant)',
        size: '24px',
      }"
    />
    <fn-typography :class="[ns.m('text')]" variant="label.large">
      <slot />
    </fn-typography>
    <slot name="trailing" v-bind="{ class: [ns.m('trailing')] }" />
  </fn-action-area>
</template>
