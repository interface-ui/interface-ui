<script lang="ts" setup>
import { InMessage } from 'interface-ui'

const handleClick = (duration: number) => {
  new InMessage().push({
    duration,
    content: `The duration is ${duration}ms`,
  })
}
</script>

<template>
  <in-button variant="outlined" @click="handleClick(2000)"> 2000 ms </in-button>
  <in-button variant="outlined" @click="handleClick(4000)"> 4000 ms </in-button>
</template>
