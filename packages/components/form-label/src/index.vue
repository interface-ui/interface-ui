<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useNamespace } from '@fusion-ui-vue/utils'
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
    <fn-typography variant="body.large" component="span">
      {{ props.label }}
    </fn-typography>
  </label>
</template>
