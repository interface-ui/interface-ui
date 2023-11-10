<script lang="ts" setup>
import { ThemeProvider } from '@fusion-ui-vue/theme'
import Checkbox from './Checkbox.vue'
import * as pkg from 'fusion-ui-iconify'
import createTheme from '@fusion-ui-vue/theme'
const { DeleteFilled } = pkg
// import { DeleteFilled } from 'fusion-ui-iconify'
const theme = createTheme('#2196f3', { target: 'host' })
</script>

<template>
  <div class="content">
    <fn-button variant="outlined" size="small">
      <delete-filled />
      delete
    </fn-button>
    <theme-provider :theme="theme">
      <fn-button variant="outlined">
        <delete-filled />
        delete
      </fn-button>
      <fn-icon-button>
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
