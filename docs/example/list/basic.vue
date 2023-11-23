<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { SendFilled, InboxFilled } = pkg
</script>

<template>
  <div style="width: 320px">
    <fn-list>
      <fn-list-item-header> Basic List </fn-list-item-header>
      <fn-list-item>
        <template #leading="{ icon }">
          <send-filled v-bind="icon" />
        </template>
        Send
      </fn-list-item>
      <fn-list-item>
        <template #leading="{ icon }">
          <inbox-filled v-bind="icon" />
        </template>
        Inbox
        <template #trailing>
          <fn-badge content="20" max="10" />
        </template>
      </fn-list-item>
      <fn-divider component="li" />
      <fn-list-item indent="1" disabled> Spam </fn-list-item>
      <fn-list-item indent="1"> Trash </fn-list-item>
    </fn-list>
  </div>
</template>
