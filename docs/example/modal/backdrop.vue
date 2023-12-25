<script lang="ts" setup>
import { ref } from 'vue'
import { styled, useTheme } from '@interface-ui/theme'
import { InCard } from 'interface-ui'

const theme = useTheme()
const open = ref(false)
const Card = styled(InCard)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
`
</script>

<template>
  <in-button variant="outlined" @click="open = !open">Open modal</in-button>
  <in-modal v-model="open" :backdrop="false">
    <card>
      <in-card-content> The Modal without backdrop </in-card-content>
    </card>
  </in-modal>
</template>
