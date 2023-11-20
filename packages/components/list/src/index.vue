<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { listProps } from './list'
import useCss from './index.jss'

const props = defineProps(listProps)
const ns = useNamespace('list')
const cssClass = useCss(props)
</script>

<template>
  <ul :class="[ns.b(), cssClass]">
    <slot />
  </ul>
</template>
