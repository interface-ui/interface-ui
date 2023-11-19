<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
import {
  FnButton, FnIconButton,
  FnMessage,
} from 'fusion-ui-vue'
import { h } from 'vue'

const { DeleteFilled, VerifiedRound } = pkg
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <fn-button
        color="success" @click="new FnMessage({
          severity: 'success',
        }).push({
          content: 'this is a success message',
          customIcon: VerifiedRound,
          action: h(FnIconButton, () => h(DeleteFilled)),
          actionEvent: (node, remove) => {
            new FnMessage().error({ content: 'error' })
            remove((node as any).id)
          },
        })"
      >
        Success
      </fn-button>
    </div>
  </div>
</template>
