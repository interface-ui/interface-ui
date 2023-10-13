<script setup lang="ts">
import { UseTag } from '@fusion-ui-vue/hooks'
import { tagProps } from '../src/tag'

const props = defineProps(tagProps)
const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void
  (e: 'close', event: MouseEvent): void
}>()
const { classList, styleList } = UseTag(props)

const handleClose = (event: MouseEvent) => {
  emits('close', event)
}

const handleClick = (event: MouseEvent) => {
  emits('click', event)
}
</script>

<template>
  <span :class="classList" :style="styleList" @click="handleClick">
    <span>
      <slot />
    </span>
    <div v-if="closable" class="close-btn" @click="handleClose">×</div>
  </span>
</template>
