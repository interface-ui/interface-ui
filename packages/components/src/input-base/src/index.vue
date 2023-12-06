<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { inputBaseProps } from './input-base'
import useCss from './index.jss'

const props = defineProps(inputBaseProps)
const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean | string[]): void
}>()
const ns = useNamespace('input-base')
const cssClass = useCss(props)

const value = computed({
  get() {
    return props.modelValue
  },
  set(newVal) {
    emit('update:modelValue', newVal)
  },
})
</script>

<template>
  <input v-model="value" :type="$props.type" :class="[ns.b(), cssClass]" />
</template>
