<script setup lang="ts">
import Notifications from '@interface-ui/icons/NotificationsFilled'
import Email from '@interface-ui/icons/EmailFilled'
</script>

<template>
  <in-badge content="1000" max="999">
    <in-icon-button color="secondary">
      <notifications />
    </in-icon-button>
  </in-badge>
  <in-badge :content="1000" :max="99">
    <in-icon-button color="tertiary">
      <email />
    </in-icon-button>
  </in-badge>
</template>
