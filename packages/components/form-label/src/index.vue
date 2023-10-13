<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils/useNamespace'
import FnTypography from '../../typography'
import { formLabelProps } from './form-label'

const props = defineProps(formLabelProps)
const ns = useNamespace('form-label')
</script>

<script lang="ts">
export default defineComponent({
  inheritAttrs: false,
})
</script>

<template>
  <label :class="[ns.b(), ns.m(props.labelPlacement)]">
    <component :is="props.control" v-bind="$attrs" />
    <fn-typography>
      {{ props.label }}
    </fn-typography>
  </label>
</template>
