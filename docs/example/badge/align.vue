<script lang="ts" setup>
import { InRadio } from 'interface-ui'
import { ref } from 'vue'
import { useTheme } from '@interface-ui/theme'

import * as pkg from 'fusion-ui-iconify'
const { NotificationsFilled } = pkg
// import { NotificationsFilled } from 'fusion-ui-iconify'

const theme = useTheme()
const xAlign = ref<'left' | 'right'>('right')
const yAlign = ref<'top' | 'bottom'>('top')
</script>

<template>
  <div>
    <in-form-label
      v-model="yAlign"
      :control="InRadio"
      label="Top"
      value="top"
    />
    <in-form-label
      v-model="yAlign"
      :control="InRadio"
      label="Bottom"
      value="bottom"
    />
    <in-form-label
      v-model="xAlign"
      :control="InRadio"
      label="Left"
      value="left"
    />
    <in-form-label
      v-model="xAlign"
      :control="InRadio"
      label="Right"
      value="right"
    />
  </div>
  <div fscw gap-10>
    <in-badge variant="dot" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </in-badge>
    <in-badge content="1" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </in-badge>
    <in-badge content="10" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </in-badge>
    <in-badge content="1000" max="99" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </in-badge>
    <in-badge content="1000" max="999" :x-align="xAlign" :y-align="yAlign">
      <notifications-filled size="24" :color="theme.schemes.secondary" />
    </in-badge>
  </div>
</template>
