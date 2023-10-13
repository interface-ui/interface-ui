<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
import { UPDATE_MODEL_EVENT, iconSize } from '@fusion-ui-vue/constants'
import { useRadio } from '@fusion-ui/hooks'
import FnRipple from '../../ripple'
import FnIcon from '../../icon'
import { radioProps } from './radio'

const props = defineProps(radioProps)
const emits = defineEmits<{
  (e: 'update:modelValue', v: string | number | boolean): void
}>()
const attrs = useAttrs()
const ns = useNamespace('radio')
const classes = useRadio(props, ns)

const checked = computed<string | number | boolean>({
  get() {
    return props.modelValue as any
  },
  set(newVal) {
    emits(UPDATE_MODEL_EVENT, newVal)
  },
})

const icon = computed<string>(() =>
  props.modelValue === attrs.value
    ? 'mdi:radiobox-marked'
    : 'mdi:radiobox-blank'
)
</script>

<template>
  <span :class="[ns.b(), ns.m(props.size), classes[ns.b()]]">
    <fn-icon
      :class="[ns.e('icon'), classes[ns.e('icon')]]"
      :icon="icon"
      :size="iconSize[props.size]"
    />
    <!-- eslint-disable vue/html-self-closing -->
    <input
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="radio"
    />
    <fn-ripple :color="props.color" center />
  </span>
</template>
