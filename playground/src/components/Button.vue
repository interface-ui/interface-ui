<script lang="ts" setup>
import { ThemeProvider } from '@fusion-ui-vue/theme'
import { FnButton, FnIconButton } from '@fusion-ui-vue/components'
import Checkbox from './Checkbox.vue'
import createTheme from '@fusion-ui-vue/theme'
import { DeleteFilled } from 'fusion-ui-iconify'
const theme = createTheme('#2196f3', { target: 'host' })
</script>

<template>
  <div class="content">
    <fn-button variant="outlined" size="small">
      <delete-filled />
      delete
    </fn-button>
    <theme-provider v-model:theme="theme">
      <fn-button variant="outlined" :color="theme => theme.schemes.error">
        <delete-filled />
        delete
      </fn-button>
      <fn-icon-button :color="theme => theme.schemes.secondary">
        <delete-filled />
      </fn-icon-button>
      <checkbox />
    </theme-provider>
    <fn-button variant="outlined" size="large" disabled>
      <delete-filled />
      delete
    </fn-button>
    <fn-icon-button>
      <delete-filled />
    </fn-icon-button>
  </div>
</template>
