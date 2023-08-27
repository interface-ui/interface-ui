<script lang="ts" setup>
import {
  checkboxProps,
  CheckboxStatus,
  iconType,
  iconSize,
} from '../src/checkbox'
import { UseCheckbox } from '../../../_hooks'
import FnRipple from '../../ripple'
import { computed, ref, watchEffect } from 'vue'
const props = defineProps(checkboxProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()

const { classList, styleList } = UseCheckbox(props)

const checked = ref<boolean>(props.modelValue ?? false)
const status = computed<CheckboxStatus>(() =>
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
        :name="iconType[status]"
        :class="classList.icon"
        :size="iconSize[props.size]"
      />
    </slot>
    <input type="checkbox" v-bind="$attrs" :class="classList.input" />
    <fn-ripple :color="props.color" center />
  </span>
</template>
