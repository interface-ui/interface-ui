<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnButton color="rgb(56, 142, 60)" @click="FnMessage({ message: 'Congrats, this is a success message.', severity: 'success' })">
        Success
      </FnButton>
      <FnButton color="rgb(237, 108, 2)" @click="FnMessage({ message: 'Warning, this is a warning message.', severity: 'warning' })">
        Warning
      </FnButton>
      <FnButton @click="FnMessage({ message: 'Warning, this is a warning message.', severity: 'error' })">
        Error
      </FnButton>
      <FnButton color="rgb(2, 136, 209);" @click="FnMessage({ message: 'Oops, this is a error message.', severity: 'info' })">
        Info
      </FnButton>
    </div>
  </div>
</template>
