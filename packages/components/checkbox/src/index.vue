<script lang="ts" setup>
import { computed } from 'vue'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { useNamespace } from '@fusion-ui-vue/utils'
import FnIconButton from '../../icon-button'
import { checkboxProps } from '../src/checkbox'
import CheckBox from '../../svg-icon/internal/CheckBoxFilled.vue'
import CheckBoxOutlineBlank from '../../svg-icon/internal/CheckBoxOutlineBlankFilled.vue'

const props = defineProps(checkboxProps)
const emits = defineEmits<{
  (e: 'update:modelValue', v: boolean | string[]): void
}>()
const ns = useNamespace('checkbox')

const checked = computed<boolean | string[]>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
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
      <check-box v-if="checked" />
      <check-box-outline-blank v-else />
    </slot>
    <!-- eslint-disable vue/html-self-closing -->
    <input
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      class="fn-form__input"
      type="checkbox"
    />
  </fn-icon-button>
</template>
