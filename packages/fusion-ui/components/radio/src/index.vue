<script setup lang="ts">
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'
import { radioEmits, radioProps } from '../src/radio'
type TargetElement = HTMLInputElement | HTMLTextAreaElement
const props = defineProps(radioProps as any)
const emit = defineEmits(radioEmits)

const handleInput = (event: MouseEvent) => {
  emit(UPDATE_MODEL_EVENT, props.value as any)
}

const handleGroupInput = (value: any) => {
  emit(UPDATE_MODEL_EVENT, value)
}

const isCheck = computed(() => {
  return props.modelValue === props.value
})
</script>

<template>
  {{ props }}--
  <div v-if="!props.optionList.length" class="fn-radio" :class="[disabled ? 'fn-radio-disabled' : '', props.modelValue === props.value ? 'fn-radio-is-check' : '']" @click="handleInput">
    <input type="radio" class="fn-radio-inner">
    <span class="fn-radio-check" :class="[props.modelValue === props.value ? 'fn-radio-is-check' : '']" />
    <span class="fn-radio-label">
      <slot />
    </span>
  </div>

  <div v-else class="fn-radio-group">
    <template v-for="(it, idx) in props.optionList" :key="idx">
      <div class="fn-radio" :class="[disabled ? 'fn-radio-disabled' : '', props.modelValue === props.value ? 'fn-radio-is-check' : '']" @click="handleGroupInput(it.value)">
        <input type="radio" class="fn-radio-inner">
        <span class="fn-radio-check" :class="[props.modelValue === it.value ? 'fn-radio-is-check' : '']" />
        <span class="fn-radio-label">
          {{ it.label }}
        </span>
      </div>
    </template>
  </div>
</template>
