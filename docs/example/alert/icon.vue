<script setup lang="ts">
import * as pkg from 'fusion-ui-iconify'
const { HistoryRound, VerifiedRound, AddShoppingCartRound } = pkg
</script>

<template>
  <div space-y-5 w-full>
    <FnAlert severity="success">
      <template #icon>
        <history-round />
      </template>
      This is an success alert — check it out!
    </FnAlert>
    <FnAlert severity="success">
      <template #icon>
        <verified-round />
      </template>
      This is an success alert — check it out!
    </FnAlert>
    <FnAlert severity="success">
      <template #icon>
        <add-shopping-cart-round />
      </template>
      This is an success alert — check it out!
    </FnAlert>
    <FnAlert severity="success" :icon="false">
      <template #icon>
        <add-shopping-cart-round />
      </template>
      This is an success alert — check it out!
    </FnAlert>
  </div>
</template>
