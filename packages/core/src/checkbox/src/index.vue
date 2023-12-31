<script lang="ts" setup>
import { computed, useAttrs } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import InIconButton from '../../icon-button'
import InInputBase from '../../input-base'
import { checkboxProps } from '../src/checkbox'
import CheckBox from '../../svg-icon/internal/CheckBoxFilled.vue'
import CheckBoxOutlineBlank from '../../svg-icon/internal/CheckBoxOutlineBlankFilled.vue'

defineProps(checkboxProps)
const ns = useNamespace('checkbox')
const attrs = useAttrs()
const checked = defineModel()

const showCheckedIcon = computed<boolean>(() => {
  if (typeof checked.value === 'boolean') {
    return checked.value
  } else {
    return (checked.value as any[]).includes(attrs.value)
  }
})
</script>

<template>
  <in-icon-button
    component="span"
    :color="$props.color"
    :size="$props.size"
    :class="[ns.b(), ns.m($props.size)]"
  >
    <slot>
      <check-box v-if="showCheckedIcon" />
      <check-box-outline-blank v-else />
    </slot>
    <!-- eslint-disable vue/html-self-closing -->
    <in-input-base
      v-bind="$attrs"
      v-model="checked"
      :class="[ns.e('input')]"
      type="checkbox"
      internal
    />
  </in-icon-button>
</template>
./checkbox ./checkbox ./checkbox
