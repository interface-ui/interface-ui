<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnButton
        color="rgb(56, 142, 60)" @click="new FnMessage().push({
          severity: 'success',
          content: 'this is a success message',
        })"
      >
        Success
      </FnButton>
      <FnButton
        color="rgb(237, 108, 2)" @click="new FnMessage({
          severity: 'warning',
          duration: 1000,
        }).push({
          content: 'this is a warning message',
        })"
      >
        Warning
      </FnButton>
      <FnButton
        @click="new FnMessage({
          severity: 'error',
        }).push({
          content: 'this is a error message',
        })"
      >
        Error
      </FnButton>
      <FnButton
        color="rgb(2, 136, 209);" @click="new FnMessage({
          severity: 'info',
        }).push({
          content: 'this is a info message',
        })"
      >
        Info
      </FnButton>
    </div>
  </div>
</template>
