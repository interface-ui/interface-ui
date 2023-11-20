<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { listItemPlaceholderProps } from './list-item-placeholder'
import useCss from './index.jss'

const props = defineProps(listItemPlaceholderProps)
const ns = useNamespace('list-item-placeholder')
const cssClass = useCss(props)
</script>

<template>
  <span :class="[ns.b(), cssClass]" />
</template>
