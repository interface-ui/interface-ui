<script lang="ts" setup>
import { FnRadio } from 'fusion-ui-vue'
import { ref } from 'vue'
import { useTheme } from '@fusion-ui-vue/theme'
// import { NotificationsFilled } from 'fusion-ui-iconify'
import * as pkg from 'fusion-ui-iconify'
const { NotificationsFilled } = pkg

const theme = useTheme()
const xAlign = ref<'left' | 'right'>('right')
const yAlign = ref<'top' | 'bottom'>('top')
</script>

<template>
  <div>
    <fn-form-label
      v-model="yAlign"
      :control="FnRadio"
      label="Top"
      value="top"
    />
    <fn-form-label
      v-model="yAlign"
      :control="FnRadio"
      label="Bottom"
      value="bottom"
    />
    <fn-form-label
      v-model="xAlign"
      :control="FnRadio"
      label="Left"
      value="left"
    />
    <fn-form-label
      v-model="xAlign"
      :control="FnRadio"
      label="Right"
      value="right"
    />
  </div>
  <div fscw gap-10>
    <fn-badge variant="dot" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </fn-badge>
    <fn-badge content="1" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </fn-badge>
    <fn-badge content="10" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </fn-badge>
    <fn-badge content="1000" max="99" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </fn-badge>
    <fn-badge content="1000" max="999" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </fn-badge>
  </div>
</template>
