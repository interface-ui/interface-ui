<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button variant="outlined" @click="FnMessage({ message: 'Show Close Button', type: 'success', duration: 0, closeBtn: true })">
        Show Close Button
      </fn-button>
    </div>
  </div>
</template>
