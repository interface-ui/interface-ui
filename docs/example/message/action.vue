<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
import { FnButton, FnIconButton, FnMessage } from 'interface-ui'
import { h } from 'vue'

const { DeleteFilled, VerifiedRound } = pkg
const handleClickClose = () => {
  new FnMessage({
    severity: 'success',
  }).push({
    content: 'this is a success message',
    customIcon: VerifiedRound,
    action: h(FnIconButton, () => h(DeleteFilled)),
  })
}

const handleClickCloseEvent = () => {
  new FnMessage({
    severity: 'success',
  }).push({
    content: 'this is a success message',
    customIcon: VerifiedRound,
    action: h(FnIconButton, () => h(DeleteFilled)),
    actionEvent: (node, remove) => {
      new FnMessage().success({ content: 'Close successfully' })
      remove((node as any).id)
    },
  })
}
</script>

<template>
  <fn-button color="success" variant="outlined" @click="handleClickClose">
    Close
  </fn-button>
  <fn-button color="success" variant="outlined" @click="handleClickCloseEvent">
    Close Event
  </fn-button>
</template>
