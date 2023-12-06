<script lang="ts" setup>
import { FnMessage } from 'interface-ui'
const handleClick = () => {
  new FnMessage().push({
    content: 'this is a message.',
    variant: 'outlined',
  })
}
</script>

<template>
  <fn-button variant="outlined" @click="handleClick"> Show message </fn-button>
</template>
