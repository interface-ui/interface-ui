<script setup lang="ts">
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'
import { radioEmits, radioProps } from '../src/radio'
import { useRadio, useRadioGroup } from '../../_hooks'
const props = defineProps(radioProps)

const emit = defineEmits(radioEmits)
const { classList, styleList } = useRadio(props)
const { classList: classListGrpup } = useRadioGroup(props)
const handleInput = (event: MouseEvent) => {
  if (props.disabled)
    return
  emit(UPDATE_MODEL_EVENT, props.value as any)
  if (props.modelValue !== props.value)
    emit('change', props.value as any)
}

const handleGroupInput = (it: any) => {
  if (it.disabled)
    return
  emit(UPDATE_MODEL_EVENT, it.value)
  if (props.modelValue !== it.value)
    emit('change', it.value as any)
}

const isChecked = computed(() => {
  return props.modelValue === props.value
})
</script>

<template>
  <div v-if="!props.optionList.length" :class="classList" @click="handleInput">
    <input type="radio" class="fn-radio-inner">
    <span class="fn-radio-check" :style="styleList" :class="{ 'is-checked': isChecked }" />
    <span class="fn-radio-label" :class="{ 'is-checked-text': isChecked }">
      <slot />
    </span>
  </div>

  <div v-else :class="classListGrpup">
    <template v-for="it in props.optionList" :key="it">
      <div :class="[classList, it.disabled ? 'is-disabled' : '']" @click="handleGroupInput(it)">
        <input type="radio" class="fn-radio-inner">
        <span class="fn-radio-check" :style="styleList" :class="{ 'is-checked': props.modelValue === it.value }" />
        <span class="fn-radio-label" :class="{ 'is-checked-text': props.modelValue === it.value }">
          {{ it.label }}
        </span>
      </div>
    </template>
  </div>
</template>
