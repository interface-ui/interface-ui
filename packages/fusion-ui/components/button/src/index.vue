<script setup lang="ts">
import { ref } from 'vue'
import { buttonProps } from '../src/button'

defineProps(buttonProps)

defineEmits(['click'])

const buttonEl = ref<HTMLButtonElement>()

defineExpose({
  el: buttonEl,
})
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
    @click="$emit('click')"
  >
    <span v-if="icon" :style="$slots.default ? 'margin-right: 3px;' : ''">
      <fn-icon :icon="icon" color="color" size="13" />
    </span>
    <span>
      <slot />
    </span>
  </button>
</template>
