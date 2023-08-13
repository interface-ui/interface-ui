<script setup lang="ts">
import { nextTick } from 'vue'
import { UPDATE_MODEL_EVENT } from '../../../constans/event'
import { useSwitch, useSwitchInner } from '../../_hooks'
import { switchEmits, switchProps } from '../src/switch'

const props = defineProps(switchProps)
const emit = defineEmits(switchEmits)
const { styleList, classList } = useSwitchInner(props)
const { fnClassList } = useSwitch(props)
const handleChange = (event: MouseEvent) => {
  if (props.disabled)
    return
  emit(UPDATE_MODEL_EVENT, !props.modelValue as any)
  nextTick(() => {
    emit('change', props.modelValue as any)
  })
}
</script>

<template>
  <div
    :class="fnClassList"
    :style="styleList"
    @click="handleChange"
  >
    <div class="fn-switch__inner">
      <!-- text -->
      <div v-show="props.checkedText || props.unCheckedText" class="fn-switch__core">
        <span v-show="props.checkedText && props.modelValue">
          {{ props.checkedText }}
        </span>
        <span v-show="props.unCheckedText && !props.modelValue">
          {{ props.unCheckedText }}
        </span>
      </div>

      <!-- icon -->
      <div v-show="props.checkedIcon || props.unCheckedIcon" class="fn-switch__core">
        <span v-show="props.modelValue" class="icon">
          <fn-icon :icon="props.checkedIcon" :color="props.checkedIconColor" size="13" />
        </span>
        <span v-show="!props.modelValue" class="icon">
          <fn-icon :icon="props.unCheckedIcon" :color="props.unCheckedIconColor" size="13" />
        </span>
      </div>
      <div class="fn-switch__button" :class="classList" />
    </div>
  </div>
</template>
