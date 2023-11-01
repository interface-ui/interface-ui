<script lang="ts" setup>
import { useNamespace } from '@fusion-ui-vue/utils'
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { inputBaseProps } from './input-base'
import useCss from './index.jss'

const props = defineProps(inputBaseProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: string): void }>()
const ns = useNamespace('input-base')
const cssClass = useCss(props)

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
  <input v-model="value" :class="[ns.b(), cssClass]" />
</template>
