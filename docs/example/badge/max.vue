<script setup lang="ts">
import { EmailFilled, NotificationsFilled } from 'fusion-ui-iconify'
</script>

<template>
  <fn-badge content="1000" max="999">
    <fn-icon-button color="secondary">
      <notifications-filled />
    </fn-icon-button>
  </fn-badge>
  <fn-badge :content="1000" :max="99">
    <fn-icon-button color="tertiary">
      <email-filled />
    </fn-icon-button>
  </fn-badge>
</template>
