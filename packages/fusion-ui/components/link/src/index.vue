<script setup lang="ts">
import { linkEmits, linkProps } from '../src/link'

const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

function handleClick(event: MouseEvent) {
  if (!props.disabled)
    emit('click', event)
}
</script>

<template>
  <a
    class="fn-link"
    :class="[
      `fn-link--${type}`,
      disabled && 'is-disabled',
      !underline ? '' : 'is-underline',
    ]"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <fn-icon v-if="icon" :icon="icon" />
    <span v-if="$slots.default">
      <slot />
    </span>
  </a>
</template>
