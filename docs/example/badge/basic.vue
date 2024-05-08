<script setup lang="ts">
import { useTheme } from '@interface-ui/theme'
import Notifications from '@interface-ui/icons/NotificationsFilled'

const theme = useTheme()
</script>

<template>
  <in-badge variant="dot">
    <in-button shape="rounded">Dot</in-button>
  </in-badge>
  <in-badge content="10">
    <in-button shape="rounded">Hello</in-button>
  </in-badge>
  <in-badge content="6">
    <notifications font-size="24" :color="theme.colors.grey[500]" />
  </in-badge>
</template>
