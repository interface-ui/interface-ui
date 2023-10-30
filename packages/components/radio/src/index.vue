<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { UPDATE_MODEL_EVENT } from '@fusion-ui-vue/constants'
import { FnIconButton } from '../../icon-button'
import FnRipple from '../../ripple'
import RadioButtonChecked from '../../internal/RadioButtonCheckedFilled.vue'
import RadioButtonUnchecked from '../../internal/RadioButtonUncheckedFilled.vue'
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
    v-slot="icon"
    component="span"
    v-bind="{ color: $props.color, size: $props.size, class: [ns.b()] }"
    :class="[ns.b(), ns.m(props.size)]"
  >
    <radio-button-checked v-if="checked" :size="icon.size" />
    <radio-button-unchecked v-else :size="icon.size" />
    <!-- eslint-disable vue/html-self-closing -->
    <input
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      class="fn-form__input"
      type="radio"
    />
    <fn-ripple :color="props.color" center />
  </fn-icon-button>
</template>
