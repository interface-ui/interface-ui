<script lang="ts" setup>
import { InButton, InIconButton, InMessage } from '@interface-ui/core'
import { h } from 'vue'
import Delete from '@interface-ui/icons/DeleteFilled'
import Verified from '@interface-ui/icons/VerifiedRound'

const handleClickClose = () => {
  new InMessage({
    severity: 'success',
  }).push({
    content: 'this is a success message',
    customIcon: Verified,
    action: h(InIconButton, () => h(Delete)),
  })
}

const handleClickCloseEvent = () => {
  new InMessage({
    severity: 'success',
  }).push({
    content: 'this is a success message',
    customIcon: Verified,
    action: h(InIconButton, () => h(Delete)),
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
