<script setup lang="ts">
import { ref } from 'vue'

const value = ref<boolean>(true)
</script>

<template>
  <fn-switch v-model="value" disabled-icon />
  <fn-switch v-slot="icon" v-model="value">
    <fn-icon icon="ic:baseline-plus" v-bind="icon" />
  </fn-switch>
</template>
