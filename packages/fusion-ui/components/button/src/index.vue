<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { buttonProps } from '../src/button'
import { UseButton } from '../../_hooks'
const props = defineProps(buttonProps)
const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const { classList, styleList } = UseButton(props)

const buttonEl = ref<HTMLButtonElement>()

const handleClick = (event: MouseEvent) => {
  const { disabled } = toRefs(props)
  /** 禁用则返回 */
  if (disabled.value) {
    /**
       * 阻止默认行为
       *
       * @see event.preventDefault https://developer.mozilla.org/zh-CN/docs/Web/API/Event/preventDefault
       */
    event.preventDefault()
    return
  }

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
