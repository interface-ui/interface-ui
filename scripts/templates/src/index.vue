<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { __component__Props } from './__component__KebabCase__'

defineProps(__component__Props)
const ns = useNamespace('__component__KebabCase__')
</script>

<template>
  <div :class="[ns.b()]">
    <slot />
  </div>
</template>
