<script lang="ts" setup>
import { ThemeProvider } from '@interface-ui/theme'
import { InButton, InIconButton } from '@interface-ui/components'
import Checkbox from './Checkbox.vue'
import createTheme from '@interface-ui/theme'
import { DeleteFilled } from 'fusion-ui-iconify'
const theme = createTheme('#2196f3', { target: 'host' })
</script>

<template>
  <div class="content">
    <in-button variant="outlined" size="small">
      <delete-filled />
      delete
    </in-button>
    <theme-provider v-model:theme="theme">
      <in-button variant="outlined" :color="theme => theme.schemes.error">
        <delete-filled />
        delete
      </in-button>
      <in-icon-button :color="theme => theme.schemes.secondary">
        <delete-filled />
      </in-icon-button>
      <checkbox />
    </theme-provider>
    <in-button variant="outlined" size="large" disabled>
      <delete-filled />
      delete
    </in-button>
    <in-icon-button>
      <delete-filled />
    </in-icon-button>
  </div>
</template>
