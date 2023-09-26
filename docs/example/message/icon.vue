<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnButton @click="FnMessage({ message: 'Close logo', showIcon: false })">
        Close logo
      </FnButton>
    </div>
  </div>
</template>
