<script lang="ts" setup>
import { useNamespace } from '@interface-ui/utils'
import { InIconButton } from '../../icon-button'
import InInputBase from '../../input-base'
import RadioButtonChecked from '../../svg-icon/internal/RadioButtonCheckedFilled.vue'
import RadioButtonUnchecked from '../../svg-icon/internal/RadioButtonUncheckedFilled.vue'
import { radioProps } from './radio'

const props = defineProps(radioProps)
const ns = useNamespace('radio')
const checked = defineModel()
</script>

<template>
  <in-icon-button
    component="span"
    :color="$props.color"
    :size="$props.size"
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
