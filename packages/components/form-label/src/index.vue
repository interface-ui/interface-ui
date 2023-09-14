<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@fusion-ui/utils/useNamespace'
import { isString } from '@fusion-ui/utils/types'
import FnTypography from '../../typography'
import { formLabelProps } from './form-label'

const props = defineProps(formLabelProps)
const ns = useNamespace('form-label')
const classList = computed(() => {
  const { labelPlacement, required } = props
  const classList = [ns.b()]
  if (isString(labelPlacement)) {
    classList.push(ns.m(labelPlacement))
  }
  if (required) {
    classList.push(ns.m('required'))
  }
  return classList
})
</script>

<script lang="ts">
export default {
  name: 'FnFormLabel',
}
</script>

<template>
  <label :class="classList">
    <slot />
    <fn-typography>
      {{ props.label }}
    </fn-typography>
  </label>
</template>
