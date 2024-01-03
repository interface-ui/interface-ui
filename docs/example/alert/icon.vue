<script setup lang="ts">
import {
  AddShoppingCartRound,
  HistoryRound,
  VerifiedRound,
} from '@interface-ui/icons'
</script>

<template>
  <div space-y-5 w-full>
    <InAlert severity="success">
      <template #icon>
        <history-round />
      </template>
      This is an success alert — check it out!
    </InAlert>
    <InAlert severity="success">
      <template #icon>
        <verified-round />
      </template>
      This is an success alert — check it out!
    </InAlert>
    <InAlert severity="success">
      <template #icon>
        <add-shopping-cart-round />
      </template>
      This is an success alert — check it out!
    </InAlert>
    <InAlert severity="success" :icon="false">
      <template #icon>
        <add-shopping-cart-round />
      </template>
      This is an success alert — check it out!
    </InAlert>
  </div>
</template>
