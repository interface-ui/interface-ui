<script setup lang="ts">
import { useTheme } from '@interface-ui/theme'
import { NotificationsFilled } from '@interface-ui/icons'

const theme = useTheme()
</script>

<template>
  <in-badge variant="dot" color="tertiary">
    <notifications-filled size="24" :color="theme.colors.grey[500]" />
  </in-badge>
  <in-badge content="10" :color="theme => theme.colors.cyan[400]">
    <in-button>Hello</in-button>
  </in-badge>
</template>
