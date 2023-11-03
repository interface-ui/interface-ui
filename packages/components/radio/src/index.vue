<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { FnIconButton } from '../../icon-button'
import RadioButtonChecked from '../../svg-icon/internal/RadioButtonCheckedFilled.vue'
import RadioButtonUnchecked from '../../svg-icon/internal/RadioButtonUncheckedFilled.vue'
import FnInputBase from '../../input-base'
import { radioProps } from './radio'

const props = defineProps(radioProps)
const emits = defineEmits<{
  (e: 'update:modelValue', v: string | number | boolean): void
}>()
const ns = useNamespace('radio')

const checked = computed<string | number | boolean>({
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
    component="span"
    v-bind="{ color: $props.color, size: $props.size, class: [ns.b()] }"
    :class="[ns.b(), ns.m(props.size)]"
  >
    <radio-button-checked v-if="checked === $attrs.value" />
    <radio-button-unchecked v-else />
    <fn-input-base
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="radio"
      internal
    />
  </fn-icon-button>
</template>
