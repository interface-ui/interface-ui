<script setup lang="ts">
import { useTheme } from '@interface-ui/theme'
import * as pkg from 'fusion-ui-iconify'
const { NotificationsFilled } = pkg
// import { NotificationsFilled } from 'fusion-ui-iconify'

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
      <notifications-filled size="24" :color="theme.colors.grey[500]" />
    </in-badge>
  </div>
</template>
