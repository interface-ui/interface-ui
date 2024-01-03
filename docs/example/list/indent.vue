<script lang="ts" setup>
import Check from '@interface-ui/icons/CheckFilled.js'
</script>

<template>
  <div style="width: 320px">
    <in-list>
      <in-list-item>
        <template #leading="{ icon }">
          <check v-bind="icon" />
        </template>
        🍎 Apple
      </in-list-item>
      <in-list-item indent="1"> 🍌 Banana </in-list-item>
      <in-list-item indent="1" disabled> 🍇 Grape </in-list-item>
      <in-list-item indent="1"> 🍊 Organge </in-list-item>
    </in-list>
  </div>
</template>
