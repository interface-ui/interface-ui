<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import FnPopover from '../../popover'
import FnList from '../../list'

const ns = useNamespace('menu')
</script>

<template>
  <fn-popover :class="[ns.b()]">
    <fn-list background="surfaceContainer">
      <slot />
    </fn-list>
  </fn-popover>
</template>
