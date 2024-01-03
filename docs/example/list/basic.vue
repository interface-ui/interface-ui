<script lang="ts" setup>
import Inbox from '@interface-ui/icons/es/InboxFilled.js'
import Send from '@interface-ui/icons/es/SendFilled.js'
</script>

<template>
  <div style="width: 320px">
    <in-list>
      <in-list-item-header> Basic List </in-list-item-header>
      <in-list-item>
        <template #leading="{ icon }">
          <send v-bind="icon" />
        </template>
        Send
      </in-list-item>
      <in-list-item>
        <template #leading="{ icon }">
          <inbox v-bind="icon" />
        </template>
        Inbox
        <template #trailing>
          <in-badge content="20" max="10" />
        </template>
      </in-list-item>
      <in-divider component="li" />
      <in-list-item indent="1" disabled> Spam </in-list-item>
      <in-list-item indent="1"> Trash </in-list-item>
    </in-list>
  </div>
</template>
