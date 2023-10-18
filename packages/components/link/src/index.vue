<script setup lang="ts">
import { useLink } from '@fusion-ui-vue/hooks'
import { useNamespace } from '@fusion-ui-vue/utils'
import { linkProps } from '../src/link'
const props = defineProps(linkProps)

const ns = useNamespace('link')
const cssClass = useLink(props)
</script>

<template>
  <a :class="[ns.b(), cssClass]">
    <span v-if="icon">
      <fn-icon
        :icon="icon"
        :style="$slots.default ? 'margin-right: 3px;' : ''"
      />
    </span>
    <span>
      <slot />
    </span>
  </a>
</template>
