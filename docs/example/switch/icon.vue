<script setup lang="ts">
import { ref } from 'vue'
import Add from '@interface-ui/icons/AddFilled'

const value = ref<boolean>(true)
</script>

<template>
  <in-switch v-model="value" disabled-icon />
  <in-switch v-model="value">
    <add />
  </in-switch>
</template>
