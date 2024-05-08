<script lang="ts" setup>
import { InButton, InMessage } from '@interface-ui/core'
import FilterThree from '@interface-ui/icons/FilterThreeFilled'

const handleClick = () => {
  new InMessage({}).push({
    content: 'this is a success message',
    severity: 'success',
    customIcon: FilterThree,
  })
}
</script>

<template>
  <in-button color="success" @click="handleClick"> Success </in-button>
</template>
