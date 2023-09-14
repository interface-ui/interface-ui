<script lang="ts" setup>
import { computed, defineComponent } from 'vue'
import { useNamespace } from '@fusion-ui/utils/useNamespace'
import { isString } from '@fusion-ui/utils/types'
import FnTypography from '../../typography'
import { formLabelProps } from './form-label'

const props = defineProps(formLabelProps)
const ns = useNamespace('form-label')

const classList = computed(() => {
  const { labelPlacement } = props
  const classList = [ns.b()]
  if (isString(labelPlacement)) {
    classList.push(ns.m(labelPlacement))
  }
  return classList
})
</script>

<script lang="ts">
export default defineComponent({
  name: 'FnFormLabel',
  inheritAttrs: false,
})
</script>

<template>
  <label :class="classList">
    <component :is="props.control" v-bind="$attrs" />
    <fn-typography>
      {{ props.label }}
    </fn-typography>
  </label>
</template>
