<script lang="ts" setup>
import { ref } from 'vue'
import { styled, useTheme } from '@fusion-ui-vue/theme'
import { FnCard } from 'interface-ui'

const theme = useTheme()
const open = ref(false)
const Card = styled(FnCard)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
`
</script>

<template>
  <fn-button variant="outlined" @click="open = !open">Open modal</fn-button>
  <fn-modal v-model="open" :backdrop="false">
    <card>
      <fn-card-content> The Modal without backdrop </fn-card-content>
    </card>
  </fn-modal>
</template>
