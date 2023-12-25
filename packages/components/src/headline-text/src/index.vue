<script lang="ts" setup>
import InTypography from '../../typography'
import { headlineTextProps } from './headline-text'

defineProps(headlineTextProps)
defineOptions({ inheritAttrs: false })
</script>

<template>
  <in-typography component="h1" variant="body.large" color="inherit">
    {{ $props.headline }}
  </in-typography>
  <in-typography
    v-if="$props.supportingText"
    component="p"
    variant="body.medium"
    color="onSurfaceVariant"
    cs="opacity: 0.8;"
  >
    {{ $props.supportingText }}
  </in-typography>
</template>
