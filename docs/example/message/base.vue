<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnButton @click="FnMessage({ message: 'this is a message.' })">
        Show message
      </FnButton>
    </div>
  </div>
</template>
