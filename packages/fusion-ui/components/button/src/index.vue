<script setup lang="ts">
import { ref } from 'vue'
import { buttonProps } from '../src/button'

defineProps(buttonProps)

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const buttonEl = ref<HTMLButtonElement>()

const handleClick = (event: MouseEvent) => {
  emits('click', event)
}

defineExpose({
  el: buttonEl,
})
</script>

<script lang="ts">
export default {
  name: 'FnButton',
}
</script>

<template>
  <button
    ref="buttonEl"
    :type="nativeType"
    class="fn-button"
    :class="[
      `fn-button--${type}`,
      `fn-button--${state}`,
      `fn-button--${shape}`,
      `fn-button--${size}`,
      disabled && 'is-disabled',
    ]"
    @click="handleClick"
  >
    <span v-if="icon" :style="$slots.default ? 'margin-right: 3px;' : ''">
      <fn-icon :icon="icon" color="color" size="13" />
    </span>
    <span>
      <slot />
    </span>
  </button>
</template>
