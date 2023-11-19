<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnButton
        color="success" @click="new FnMessage({
          severity: 'success',
        }).push({
          duration: 2000,
          content: 'this is a success message',
        })"
      >
        Success
      </FnButton>
      <FnButton
        color="success" @click="new FnMessage({
          severity: 'success',
        }).push({
          duration: 4000,
          content: 'this is a success message',
        })"
      >
        Success
      </FnButton>
    </div>
  </div>
</template>
