<script setup lang="ts">
import { useTheme } from '@interface-ui/theme'
import Notifications from '@interface-ui/icons/NotificationsFilled.js'

const theme = useTheme()
</script>

<template>
  <div fscw gap-10>
    <in-badge variant="dot">
      <in-button>Dot</in-button>
    </in-badge>
    <in-badge content="10">
      <in-button>Hello</in-button>
    </in-badge>
    <in-badge content="6">
      <notifications size="24" :color="theme.colors.grey[500]" />
    </in-badge>
  </div>
</template>
