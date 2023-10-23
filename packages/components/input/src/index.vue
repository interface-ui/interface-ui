<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { inputProps } from './input'

const props = defineProps(inputProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: string): void }>()
const ns = useNamespace('input')

const value = computed<string>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})
</script>

<template>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <input v-model="value" :class="[ns.b()]" class="bady-large" />
</template>
