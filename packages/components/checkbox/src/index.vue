<script lang="ts" setup>
import { computed, defineComponent, useAttrs } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui/constants'
import { useCheckbox } from '@fusion-ui/hooks'
import type { CheckboxStatus } from '../src/checkbox'
import { checkboxProps, iconSize, iconType } from '../src/checkbox'
import FnRipple from '../../ripple'
import FnIcon from '../../icon'

const props = defineProps(checkboxProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const { classes } = useCheckbox(props)
const attrs = useAttrs()

const status = computed<CheckboxStatus>(() => {
  if (typeof checked.value === 'boolean') {
    return checked.value ? 'checked' : 'blank'
  } else {
    return (checked.value as any[]).includes(attrs.value) ? 'checked' : 'blank'
  }
})
const checked = computed<boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'FnCheckbox',
  inheritAttrs: false,
})
</script>

<template>
  <span class="fn-checkbox-icon-root" :class="classes['fn-checkbox-icon-root']">
    <slot
      :icon="{ checked, size: iconSize[props.size], color: props.color }"
      name="icon"
    >
      <fn-icon
        class="fn-checkbox-icon"
        :class="classes['fn-checkbox-icon']"
        :icon="iconType[status]"
        :size="iconSize[props.size]"
      />
    </slot>
    <!-- eslint-disable vue/html-self-closing -->
    <input
      v-bind="$attrs"
      v-model="checked"
      class="fn-checkbox-input"
      type="checkbox"
    />
    <fn-ripple :color="props.color" center />
  </span>
</template>
