<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import InPopover from '../../popover'
import InList from '../../list'

const ns = useNamespace('menu')
</script>

<template>
  <in-popover :class="[ns.b()]">
    <in-list background="surfaceContainer">
      <slot />
    </in-list>
  </in-popover>
</template>
