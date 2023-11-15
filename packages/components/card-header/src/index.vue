<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { cardHeaderProps } from './card-header'
import useCss from './index.jss'

const props = defineProps(cardHeaderProps)
const ns = useNamespace('card-header')
const cssClass = useCss(props)
</script>

<template>
  <div :class="[ns.b(), cssClass]">
    <slot name="avatar" />
    <span :class="[ns.m('title')]">
      <slot />
    </span>

    <slot name="action" />
  </div>
</template>
