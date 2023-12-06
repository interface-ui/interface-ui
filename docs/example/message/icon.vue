<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'
import { FnButton, FnMessage } from 'interface-ui'
const { Filter3Filled } = pkg

const handleClick = () => {
  new FnMessage({}).push({
    content: 'this is a success message',
    severity: 'success',
    customIcon: Filter3Filled,
  })
}
</script>

<template>
  <fn-button color="success" @click="handleClick"> Success </fn-button>
</template>
