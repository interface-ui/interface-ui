<script lang="ts" setup>
import * as pkg from 'fusion-ui-iconify'

const { CheckFilled } = pkg
</script>

<template>
  <div style="width: 320px">
    <fn-list>
      <fn-list-item>
        <template #leading="{ icon }">
          <check-filled v-bind="icon" />
        </template>
        🍎 Apple
      </fn-list-item>
      <fn-list-item indent="1"> 🍌 Banana </fn-list-item>
      <fn-list-item indent="1" disabled> 🍇 Grape </fn-list-item>
      <fn-list-item indent="1"> 🍊 Organge </fn-list-item>
    </fn-list>
  </div>
</template>
