<script lang="ts" setup>
import { FnMessage } from 'fusion-ui-vue'
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnButton @click="FnMessage({ message: 'Default delay 2s', type: 'success' })">
        Default delay 2s
      </FnButton>
      <FnButton @click="FnMessage({ message: 'Delay 3s', type: 'success', duration: 3000 })">
        Delay 3s
      </FnButton>
      <FnButton @click="FnMessage({ message: 'It keeps showing', type: 'success', duration: 0, closeBtn: true })">
        It keeps showing
      </FnButton>
    </div>
  </div>
</template>
