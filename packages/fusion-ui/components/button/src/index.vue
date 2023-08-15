<script setup lang="ts">
import { ref } from 'vue'
import { buttonProps } from '../src/button'
import { UseButton } from '../../_hooks'
const props = defineProps(buttonProps)
const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const { classList, styleList } = UseButton(props)

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
    :class="classList"
    :style="styleList"
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
