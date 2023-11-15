<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { cardContentProps } from './card-content'
import useCss from './index.jss'

const props = defineProps(cardContentProps)
const ns = useNamespace('card-content')
const cssClass = useCss(props)
</script>

<template>
  <div :class="[ns.b(), cssClass]">
    <slot />
  </div>
</template>
