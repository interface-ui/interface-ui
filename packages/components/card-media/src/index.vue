<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { cardMediaProps } from './card-media'
import useCss from './index.jss'

const props = defineProps(cardMediaProps)
const ns = useNamespace('card-media')
const cssClass = useCss(props)
</script>

<template>
  <component
    :is="$props.component"
    :class="[
      ns.b(),
      ns.m($props.shape),
      $props.gutter ? ns.m('gutter') : '',
      cssClass,
    ]"
  />
</template>
