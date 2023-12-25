<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
import { InButton, InMessage } from 'interface-ui'
const { Filter3Filled } = pkg

const handleClick = () => {
  new InMessage({}).push({
    content: 'this is a success message',
    severity: 'success',
    customIcon: Filter3Filled,
  })
}
</script>

<template>
  <in-button color="success" @click="handleClick"> Success </in-button>
</template>
