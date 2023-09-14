<script lang="ts" setup>
import { ref } from 'vue'
const checked = ref<boolean>(true)
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnFormLabel label="Label">
        <fn-checkbox v-model="checked" />
      </FnFormLabel>
      <FnFormLabel label="Required" required>
        <fn-checkbox v-model="checked" />
      </FnFormLabel>
      <FnFormLabel label="Disabled" disabled>
        <fn-checkbox v-model="checked" />
      </FnFormLabel>
    </div>
  </div>
</template>
