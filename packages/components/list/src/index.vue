<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { listProps } from './list'
import useCss from './index.jss'

const props = defineProps(listProps)
const ns = useNamespace('list')
const cssClass = useCss(props)
</script>

<template>
  <component
    :is="$props.component"
    :class="[ns.b(), ns.m(`level-${$props.level}`), cssClass]"
  >
    <ul :class="[ns.e('ul')]">
      <slot />
    </ul>
  </component>
</template>
