<script setup lang="ts">
import AddShoppingCart from '@interface-ui/icons/AddShoppingCartRound.js'
import History from '@interface-ui/icons/HistoryRound.js'
import Verified from '@interface-ui/icons/VerifiedRound.js'
</script>

<template>
  <div space-y-5 w-full>
    <InAlert severity="success">
      <template #icon>
        <history />
      </template>
      This is an success alert — check it out!
    </InAlert>
    <InAlert severity="success">
      <template #icon>
        <verified />
      </template>
      This is an success alert — check it out!
    </InAlert>
    <InAlert severity="success">
      <template #icon>
        <add-shopping-cart />
      </template>
      This is an success alert — check it out!
    </InAlert>
    <InAlert severity="success" :icon="false">
      <template #icon>
        <add-shopping-cart />
      </template>
      This is an success alert — check it out!
    </InAlert>
  </div>
</template>
