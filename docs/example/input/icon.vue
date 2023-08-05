<script setup lang="ts">
import { ref } from 'vue'
const value1 = ref('')
const value2 = ref('')
</script>

<template>
  <div space-y-2 class="w-100% o-demo_action_icon">
    <div fscw gap-2>
      <fn-input v-model="value1" placeholder="Please input" prefix-icon="twemoji:calendar" />
      <fn-input v-model="value2" placeholder="Please input" suffix-icon="twemoji:calendar" />
    </div>
  </div>
</template>
