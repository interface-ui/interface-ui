<script lang="ts" setup>
import Accessibility from '@interface-ui/icons/AccessibilityFilled'
import Autorenew from '@interface-ui/icons/AutorenewFilled'
import Book from '@interface-ui/icons/BookFilled'
</script>

<template>
  <in-avatar>
    <book />
  </in-avatar>
  <in-avatar :color="theme => theme.colors.pink[400]">
    <accessibility />
  </in-avatar>
  <in-avatar color="#60ae57">
    <autorenew />
  </in-avatar>
</template>
