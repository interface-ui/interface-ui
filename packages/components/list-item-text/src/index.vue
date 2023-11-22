<script lang="ts" setup>
import FnTypography from '../../typography'
import { listItemTextProps } from './list-item-text'

defineProps(listItemTextProps)
defineOptions({ inheritAttrs: false })
</script>

<template>
  <fn-typography component="h1" variant="body.large" color="inherit">
    {{ $props.headline }}
  </fn-typography>
  <fn-typography
    v-if="$props.supportingText"
    component="p"
    variant="body.medium"
    color="onSurfaceVariant"
    cs="opacity: 0.8;"
  >
    {{ $props.supportingText }}
  </fn-typography>
</template>
