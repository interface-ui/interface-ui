<script setup lang="ts">
import { EmailFilled, NotificationsFilled } from '@interface-ui/icons'
</script>

<template>
  <in-badge content="1000" max="999">
    <in-icon-button color="secondary">
      <notifications-filled />
    </in-icon-button>
  </in-badge>
  <in-badge :content="1000" :max="99">
    <in-icon-button color="tertiary">
      <email-filled />
    </in-icon-button>
  </in-badge>
</template>
