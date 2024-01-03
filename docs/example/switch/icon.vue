<script setup lang="ts">
import { ref } from 'vue'
import { AddFilled } from '@interface-ui/icons'
const value = ref<boolean>(true)
</script>

<template>
  <in-switch v-model="value" disabled-icon />
  <in-switch v-model="value">
    <add-filled />
  </in-switch>
</template>
