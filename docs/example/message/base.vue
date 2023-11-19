<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
import { FnMessage } from 'fusion-ui-vue'
const { DeleteFilled, VerifiedRound } = pkg
</script>

<template>
  <div space-y-2>
    <div fscw gap-2>
      <FnButton
        @click="new FnMessage().push({
          content: 'this is a info message',
        })"
      >
        Show message
      </FnButton>
    </div>
  </div>
</template>
