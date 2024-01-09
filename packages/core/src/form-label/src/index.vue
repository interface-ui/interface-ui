<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useNamespace } from '@interface-ui/utils'
import InTypography from '../../typography'
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
    <props.control v-bind="$attrs" />
    <in-typography
      variant="body.large"
      component="span"
      :disabled="$attrs.disabled"
    >
      {{ props.label }}
    </in-typography>
  </label>
</template>
