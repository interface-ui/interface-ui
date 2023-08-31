<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import { UseCheckbox } from '@fusion-ui/hooks'
import type { CheckboxStatus } from '../src/checkbox'
import { checkboxProps, iconSize, iconType } from '../src/checkbox'
import FnRipple from '../../ripple'
const props = defineProps(checkboxProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()

const { classList, styleList } = UseCheckbox(props)

const checked = ref<boolean>(props.modelValue ?? false)
const status = computed<CheckboxStatus>(() =>
  // eslint-disable-next-line @typescript-eslint/comma-dangle
  checked.value ? 'checked' : 'blank'
)
watchEffect(() => {
  checked.value = props.modelValue
})

const toggle = () => {
  checked.value = !checked.value
  emits('update:modelValue', checked.value)
}
</script>

<script lang="ts">
export default {
  name: 'FnCheckbox',
}
</script>

<template>
  <span :class="classList.root" :style="styleList" @click="toggle">
    <slot
      :icon="{ checked, size: iconSize[props.size], color: props.color }"
      name="icon"
    >
      <fn-icon
        :color="props.color"
        :icon="iconType[status]"
        :class="classList.icon"
        :size="iconSize[props.size]"
      />
      {{ checked }}
    </slot>
    <!-- eslint-disable vue/html-self-closing -->
    <input type="checkbox" v-bind="$attrs" :class="classList.input" />
    <FnRipple :color="props.color" center />
  </span>
</template>
