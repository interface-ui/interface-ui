<script setup lang="ts">
import { useLink } from '@fusion-ui/hooks'
import { useNamespace } from '@fusion-ui/utils'
import { linkEmits, linkProps } from '../src/link'
const props = defineProps(linkProps)

const emit = defineEmits(linkEmits)
const ns = useNamespace('link')
const { classes } = useLink(props, ns)
function handleClick(event: MouseEvent) {
  emit('click', event)
}
</script>

<template>
  <a
    :class="[ns.b(), classes[ns.b()]]"
    :href="!href ? undefined : href"
    @click="handleClick"
  >
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
