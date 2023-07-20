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
      disabled && 'is-disabled-link',
      underline ? '' : 'is-underline',
    ]"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <span v-if="icon">
      <fn-icon :icon="icon" :style="$slots.default ? 'margin-right: 3px;' : ''" />
    </span>
    <span>
      <slot />
    </span>
  </a>
</template>
