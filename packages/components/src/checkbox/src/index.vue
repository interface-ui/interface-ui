<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { useNamespace } from '@fusion-ui-vue/utils'
import FnIconButton from '../../icon-button'
import FnInputBase from '../../input-base'
import { checkboxProps } from '../src/checkbox'
import CheckBox from '../../svg-icon/internal/CheckBoxFilled.vue'
import CheckBoxOutlineBlank from '../../svg-icon/internal/CheckBoxOutlineBlankFilled.vue'

const props = defineProps(checkboxProps)
const emit = defineEmits<{
  (e: 'update:modelValue', v: boolean | string[]): void
}>()
const ns = useNamespace('checkbox')
const attrs = useAttrs()

const checked = computed<boolean | string[]>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emit(UPDATE_MODEL_EVENT, newVal)
  },
})
const showCheckedIcon = computed<boolean>(() => {
  if (typeof checked.value === 'boolean') {
    return checked.value
  } else {
    return (checked.value as any[]).includes(attrs.value)
  }
})
</script>

<template>
  <fn-icon-button
    v-slot="icon"
    component="span"
    v-bind="{
      color: $props.color,
      size: $props.size,
      class: [ns.b(), ns.m(props.size)],
    }"
  >
    <slot
      v-bind="{
        checked,
        size: icon.size,
        class: ['fn-icon', ns.e('icon')],
      }"
    >
      <check-box v-if="showCheckedIcon" />
      <check-box-outline-blank v-else />
    </slot>
    <!-- eslint-disable vue/html-self-closing -->
    <fn-input-base
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="checkbox"
      internal
    />
  </fn-icon-button>
</template>
