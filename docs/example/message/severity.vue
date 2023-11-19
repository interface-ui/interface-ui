<script lang="ts" setup>
import { ref } from 'vue'
import { FnMessage } from 'fusion-ui-vue'

const messageIns = ref(new FnMessage())
</script>

<template>
  <fn-button
    variant="text"
    color="success"
    @click="messageIns.success({ content: 'this is a success message' })"
  >
    Success
  </fn-button>
  <fn-button
    variant="text"
    color="warning"
    @click="messageIns.warning({ content: 'this is a warning message' })"
  >
    Warning
  </fn-button>
  <fn-button
    variant="text"
    color="error"
    @click="messageIns.error({ content: 'this is a error message' })"
  >
    Error
  </fn-button>
  <fn-button
    variant="text"
    color="info"
    @click="messageIns.info({ content: 'this is a info message' })"
  >
    Info
  </fn-button>
</template>
