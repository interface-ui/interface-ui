<script setup lang="ts">
import { useTheme } from '@interface-ui/theme'
import Notifications from '@interface-ui/icons/NotificationsFilled'

const theme = useTheme()
</script>

<template>
  <in-badge variant="dot" color="tertiary">
    <notifications font-size="24" :color="theme.colors.grey[500]" />
  </in-badge>
  <in-badge content="10" :color="theme => theme.colors.cyan[400]">
    <in-button shape="rounded">Hello</in-button>
  </in-badge>
</template>
