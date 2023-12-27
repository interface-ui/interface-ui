<script lang="ts" setup>
import { ref } from 'vue'
import { InMessage } from '@interface-ui/core'

const messageIns = ref(new InMessage())
</script>

<template>
  <in-button
    variant="text"
    color="success"
    @click="messageIns.success({ content: 'this is a success message' })"
  >
    Success
  </in-button>
  <in-button
    variant="text"
    color="warning"
    @click="messageIns.warning({ content: 'this is a warning message' })"
  >
    Warning
  </in-button>
  <in-button
    variant="text"
    color="error"
    @click="messageIns.error({ content: 'this is a error message' })"
  >
    Error
  </in-button>
  <in-button
    variant="text"
    color="info"
    @click="messageIns.info({ content: 'this is a info message' })"
  >
    Info
  </in-button>
</template>
