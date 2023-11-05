<script setup lang="ts">
import { useTheme } from '@fusion-ui-vue/theme'
// import { NotificationsFilled } from 'fusion-ui-iconify'
import * as pkg from 'fusion-ui-iconify'
const { NotificationsFilled } = pkg

const theme = useTheme()
</script>

<template>
  <div fscw gap-10>
    <fn-badge variant="dot">
      <fn-button>Dot</fn-button>
    </fn-badge>
    <fn-badge content="10">
      <fn-button>Hello</fn-button>
    </fn-badge>
    <fn-badge content="6">
      <notifications-filled size="24" :color="theme.colors.grey[500]" />
    </fn-badge>
  </div>
</template>
