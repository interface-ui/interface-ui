<script lang="ts" setup>
import { useTheme } from '@fusion-ui-vue/theme'
import { ref } from 'vue'
import * as pkg from 'fusion-ui-iconify'

const { WifiFilled, BluetoothFilled, SignalCellularAltFilled } = pkg
const theme = useTheme()
const checked = ref([true, false, false])
const switched = ref([true, false, false])
</script>

<template>
  <div style="width: 280px">
    <fn-list :selectable="false">
      <fn-list-item-header> Color selection </fn-list-item-header>
      <fn-list-item>
        <template #leading="{ avatar }">
          <fn-avatar
            v-bind="avatar"
            variant="rounded"
            :background="theme.colors.red[400]"
          />
        </template>
        Red
        <template #trailing>
          <fn-checkbox v-model="checked[0]" />
        </template>
      </fn-list-item>
      <fn-list-item>
        <template #leading="{ avatar }">
          <fn-avatar
            v-bind="avatar"
            variant="rounded"
            :background="theme.colors.pink[400]"
          />
        </template>
        Pink
        <template #trailing>
          <fn-checkbox v-model="checked[1]" />
        </template>
      </fn-list-item>
      <fn-list-item>
        <template #leading="{ avatar }">
          <fn-avatar
            v-bind="avatar"
            variant="rounded"
            :background="theme.colors.purple[400]"
          />
        </template>
        Purple
        <template #trailing>
          <fn-checkbox v-model="checked[2]" />
        </template>
      </fn-list-item>
    </fn-list>
  </div>
  <div style="width: 280px">
    <fn-list :selectable="false">
      <fn-list-item-header> Settings </fn-list-item-header>
      <fn-list-item>
        <template #leading="{ icon }">
          <wifi-filled v-bind="icon" />
        </template>
        Wifi
        <template #trailing>
          <fn-switch v-model="switched[0]" size="small" />
        </template>
      </fn-list-item>
      <fn-list-item>
        <template #leading="{ icon }">
          <signal-cellular-alt-filled v-bind="icon" />
        </template>
        Cellular
        <template #trailing>
          <fn-switch v-model="switched[1]" size="small" />
        </template>
      </fn-list-item>
      <fn-list-item>
        <template #leading="{ icon }">
          <bluetooth-filled v-bind="icon" />
        </template>
        Bluetooth
        <template #trailing>
          <fn-switch v-model="switched[2]" size="small" />
        </template>
      </fn-list-item>
    </fn-list>
  </div>
</template>
