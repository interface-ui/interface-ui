<script lang="ts" setup>
import { FnRadio } from 'fusion-ui-vue'
import { ref } from 'vue'

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
      <fn-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </fn-badge>
    <fn-badge content="1" :x-align="xAlign" :y-align="yAlign">
      <fn-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </fn-badge>
    <fn-badge content="10" :x-align="xAlign" :y-align="yAlign">
      <fn-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </fn-badge>
    <fn-badge content="1000" max="99" :x-align="xAlign" :y-align="yAlign">
      <fn-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </fn-badge>
    <fn-badge content="1000" max="999" :x-align="xAlign" :y-align="yAlign">
      <fn-icon icon="mdi:bell" :color="theme => theme.colors.grey[500]" />
    </fn-badge>
  </div>
</template>
