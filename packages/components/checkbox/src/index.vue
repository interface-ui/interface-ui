<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { UPDATE_MODEL_EVENT, iconSize } from '@fusion-ui/constants'
import { useCheckbox } from '@fusion-ui/hooks'
import { useNamespace } from '@fusion-ui/utils'
import type { CheckboxStatus } from '../src/checkbox'
import { checkboxProps, iconType } from '../src/checkbox'
import FnRipple from '../../ripple'
import FnIcon from '../../icon'

const props = defineProps(checkboxProps)
const emits = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
const ns = useNamespace('checkbox')
const classes = useCheckbox(props, ns)
const attrs = useAttrs()

const checked = computed<boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})

const status = computed<CheckboxStatus>(() => {
  if (typeof checked.value === 'boolean') {
    return checked.value ? 'checked' : 'blank'
  } else {
    return (checked.value as any[]).includes(attrs.value) ? 'checked' : 'blank'
  }
})
</script>

<template>
  <span :class="[ns.b(), ns.m(props.size), classes[ns.b()]]">
    <slot
      v-bind="{
        checked,
        size: iconSize[props.size],
        color: props.color,
        class: [ns.e('icon'), classes[ns.e('icon')]],
      }"
    >
      <fn-icon
        :class="[ns.e('icon'), classes[ns.e('icon')]]"
        :icon="iconType[status]"
        :size="iconSize[props.size]"
      />
    </slot>
    <!-- eslint-disable vue/html-self-closing -->
    <input
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="checkbox"
    />
    <fn-ripple :color="props.color" center />
  </span>
</template>
