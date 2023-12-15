<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
import { InButton, InIconButton, InMessage } from 'interface-ui'
import { h } from 'vue'

const { DeleteFilled, VerifiedRound } = pkg
const handleClickClose = () => {
  new InMessage({
    severity: 'success',
  }).push({
    content: 'this is a success message',
    customIcon: VerifiedRound,
    action: h(InIconButton, () => h(DeleteFilled)),
  })
}

const handleClickCloseEvent = () => {
  new InMessage({
    severity: 'success',
  }).push({
    content: 'this is a success message',
    customIcon: VerifiedRound,
    action: h(InIconButton, () => h(DeleteFilled)),
    actionEvent: (node, remove) => {
      new InMessage().success({ content: 'Close successfully' })
      remove((node as any).id)
    },
  })
}
</script>

<template>
  <in-button color="success" variant="outlined" @click="handleClickClose">
    Close
  </in-button>
  <in-button color="success" variant="outlined" @click="handleClickCloseEvent">
    Close Event
  </in-button>
</template>
