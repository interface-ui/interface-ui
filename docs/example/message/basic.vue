<script lang="ts" setup>
import { InMessage } from 'interface-ui'
const handleClick = () => {
  new InMessage().push({
    content: 'this is a message.',
    variant: 'outlined',
  })
}
</script>

<template>
  <in-button variant="outlined" @click="handleClick"> Show message </in-button>
</template>
