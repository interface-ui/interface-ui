<script setup lang="ts">
import { useTheme } from '@fusion-ui-vue/theme'
import { NotificationsFilled } from 'fusion-ui-iconify'

const theme = useTheme()
</script>

<template>
  <fn-badge variant="dot" color="tertiary">
    <notifications-filled size="24" :color="theme.colors.grey[500]" />
  </fn-badge>
  <fn-badge content="10" :color="theme => theme.colors.cyan[400]">
    <fn-button>Hello</fn-button>
  </fn-badge>
</template>
