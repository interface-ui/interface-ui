<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import { UPDATE_MODEL_EVENT } from '@interface-ui/constants'
import { InIconButton } from '../../icon-button'
import InInputBase from '../../input-base'
import RadioButtonChecked from '../../svg-icon/internal/RadioButtonCheckedFilled.vue'
import RadioButtonUnchecked from '../../svg-icon/internal/RadioButtonUncheckedFilled.vue'
import { radioProps } from './radio'

const props = defineProps(radioProps)
const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number | boolean): void
}>()
const ns = useNamespace('radio')

const checked = computed<string | number | boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emit(UPDATE_MODEL_EVENT, newVal)
  },
})
</script>

<template>
  <in-icon-button
    component="span"
    v-bind="{ color: $props.color, size: $props.size, class: [ns.b()] }"
    :class="[ns.b(), ns.m(props.size)]"
  >
    <radio-button-checked v-if="checked === $attrs.value" />
    <radio-button-unchecked v-else />
    <in-input-base
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="radio"
      internal
    />
  </in-icon-button>
</template>
