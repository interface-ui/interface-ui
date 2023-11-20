<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnRipple from '../../ripple'

const ns = useNamespace('action-area')
</script>

<template>
  <div :class="[ns.b()]">
    <slot />
    <fn-ripple v-if="!$attrs.disabled" color="onSurface" />
  </div>
</template>
