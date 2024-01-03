<script lang="ts" setup>
import { useTheme } from '@interface-ui/theme'
import { ref } from 'vue'
import Bluetooth from '@interface-ui/icons/es/BluetoothFilled.js'
import SignalCellularAlt from '@interface-ui/icons/es/SignalCellularAltFilled.js'
import Wifi from '@interface-ui/icons/es/WifiFilled.js'
const theme = useTheme()
const checked = ref([true, false, false])
const switched = ref([true, false, false])
</script>

<template>
  <div style="width: 280px">
    <in-list :selectable="false">
      <in-list-item-header> Color selection </in-list-item-header>
      <in-list-item>
        <template #leading="{ avatar }">
          <in-avatar
            v-bind="avatar"
            variant="rounded"
            :background="theme.colors.red[400]"
          />
        </template>
        Red
        <template #trailing>
          <in-checkbox v-model="checked[0]" />
        </template>
      </in-list-item>
      <in-list-item>
        <template #leading="{ avatar }">
          <in-avatar
            v-bind="avatar"
            variant="rounded"
            :background="theme.colors.pink[400]"
          />
        </template>
        Pink
        <template #trailing>
          <in-checkbox v-model="checked[1]" />
        </template>
      </in-list-item>
      <in-list-item>
        <template #leading="{ avatar }">
          <in-avatar
            v-bind="avatar"
            variant="rounded"
            :background="theme.colors.purple[400]"
          />
        </template>
        Purple
        <template #trailing>
          <in-checkbox v-model="checked[2]" />
        </template>
      </in-list-item>
    </in-list>
  </div>
  <div style="width: 280px">
    <in-list :selectable="false">
      <in-list-item-header> Settings </in-list-item-header>
      <in-list-item>
        <template #leading="{ icon }">
          <wifi v-bind="icon" />
        </template>
        Wifi
        <template #trailing>
          <in-switch v-model="switched[0]" size="small" />
        </template>
      </in-list-item>
      <in-list-item>
        <template #leading="{ icon }">
          <signal-cellular-alt v-bind="icon" />
        </template>
        Cellular
        <template #trailing>
          <in-switch v-model="switched[1]" size="small" />
        </template>
      </in-list-item>
      <in-list-item>
        <template #leading="{ icon }">
          <bluetooth v-bind="icon" />
        </template>
        Bluetooth
        <template #trailing>
          <in-switch v-model="switched[2]" size="small" />
        </template>
      </in-list-item>
    </in-list>
  </div>
</template>
