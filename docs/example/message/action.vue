<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
import { FnButton, FnIconButton, FnMessage } from 'fusion-ui-vue'
import { h } from 'vue'

const { DeleteFilled, VerifiedRound } = pkg
const handleClick = () => {
  new FnMessage({
    severity: 'success',
  }).push({
    content: 'this is a success message',
    customIcon: VerifiedRound,
    action: h(FnIconButton, () => h(DeleteFilled)),
    actionEvent: (node, remove) => {
      new FnMessage().error({ content: 'error' })
      remove((node as any).id)
    },
  })
}
</script>

<template>
  <fn-button color="success" variant="outlined" @click="handleClick">
    Success
  </fn-button>
</template>
